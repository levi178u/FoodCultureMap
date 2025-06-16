import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { FoodCultureDoc, StoryStep } from '../types/FoodCulture';
import { DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
import { Icon } from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

interface MapComponentProps {
  foods: FoodCultureDoc[];
  center: [number, number];
  zoom: number;
  selectedFood: FoodCultureDoc | null;
  onFoodSelect: (food: FoodCultureDoc | null) => void;
  isStoryMode: boolean;
  storySteps: StoryStep[];
  currentStoryStep: number;
}

// Component to handle map updates with smooth animations
function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom, { 
      animate: true, 
      duration: 2.5,
      easeLinearity: 0.1
    });
  }, [map, center, zoom]);
  
  return null;
}

// Enhanced marker component with story mode awareness
function FoodMarker({ 
  food, 
  isSelected, 
  isStoryMode, 
  isInCurrentStory,
  isCurrentStoryStep,
  onClick 
}: {
  food: FoodCultureDoc;
  isSelected: boolean;
  isStoryMode: boolean;
  isInCurrentStory: boolean;
  isCurrentStoryStep: boolean;
  onClick: () => void;
}) {
  const getMarkerEmoji = (type: string): string => {
    const emojiMap: { [key: string]: string } = {
      'Lactic acid fermentation': '🥬',
      'Koji fermentation': '🍜',
      'Kefir grain fermentation': '🥛',
      'Wild yeast fermentation': '🍞',
      'Rhizopus oligosporus fermentation': '🌱',
      'SCOBY fermentation': '🫖',
      'Lactic acid and rennet fermentation': '🧀'
    };
    return emojiMap[type] || '🥘';
  };

  const markerIcon = new DivIcon({
    html: `
      <div class="relative">
        <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110 ${
          isCurrentStoryStep ? 'scale-150 ring-4 ring-orange-300 animate-pulse shadow-2xl' : 
          isSelected ? 'scale-125 ring-4 ring-orange-300' : 
          isInCurrentStory ? 'scale-110 ring-2 ring-orange-200' : ''
        }">
          <span class="text-white text-sm font-bold">${getMarkerEmoji(food.type)}</span>
        </div>
        ${isCurrentStoryStep ? '<div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-orange-500 animate-bounce"></div>' : 
          isSelected ? '<div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-500"></div>' : ''}
        ${isStoryMode && !isInCurrentStory ? '<div class="absolute inset-0 bg-gray-400 bg-opacity-50 rounded-full"></div>' : ''}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <Marker
      position={[food.latitude, food.longitude]}
      icon={markerIcon}
      eventHandlers={{
        click: onClick,
      }}
    >
      <Popup>
        <div className="p-3 min-w-[280px]">
          <img 
            src={food.image} 
            alt={food.foodName}
            className="w-full h-36 object-cover rounded-lg mb-3"
          />
          <h3 className="font-bold text-lg text-gray-800 mb-1">{food.foodName}</h3>
          <p className="text-sm text-gray-600 mb-2 flex items-center">
            📍 {food.location}
          </p>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">{food.description}</p>
          <div className="flex items-center justify-between text-xs">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              ⏰ {food.timeOrigin}
            </span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
              🧪 {food.type.split(' ')[0]}
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

const MapComponent: React.FC<MapComponentProps> = ({
  foods,
  center,
  zoom,
  selectedFood,
  onFoodSelect,
  isStoryMode,
  storySteps,
  currentStoryStep
}) => {
  const storyFoodIds = storySteps.map(step => step.doc.id);
  
  return (
    <div className="h-full w-full relative">
    
      {/* Story Progress Indicator */}
      {isStoryMode && storySteps.length > 0 && (
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg min-w-[200px] z-20">
          <h4 className="font-semibold text-sm text-gray-800 mb-3">Journey Progress</h4>
          <div className="space-y-2">
            {storySteps.map((step, index) => (
              <div 
                key={step.doc.id}
                className={`flex items-center space-x-2 text-xs transition-all duration-300 ${
                  index === currentStoryStep ? 'text-orange-600 font-semibold' :
                  index < currentStoryStep ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${
                  index === currentStoryStep ? 'bg-orange-500 animate-pulse' :
                  index < currentStoryStep ? 'bg-green-500' : 'bg-gray-300'
                }`} />
                <span>{step.doc.foodName} - {step.doc.country}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Map overlay for story mode */}
      {isStoryMode && (
        <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-2xl z-10" />
      )}
      
      {/* Enhanced Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg z-20">
        <h4 className="font-semibold text-sm text-gray-800 mb-3">Fermented Foods Map</h4>
        <div className="space-y-2 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
            <span>Cultural Origins ({foods.length} locations)</span>
          </div>
          {isStoryMode && (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
              <span>Current Story Location</span>
            </div>
          )}
          <div className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200">
            {isStoryMode ? 'Story mode active - Follow the journey!' : 'Click markers to explore'}
          </div>
        </div>
      </div>
        <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full rounded-2xl z-10"
        zoomControl={true}
        scrollWheelZoom={!isStoryMode} // Disable scroll zoom during story mode
        dragging={!isStoryMode} // Disable dragging during story mode
      >
        <MapUpdater center={center} zoom={zoom} />
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {foods.map((food) => {
          const isInCurrentStory = storyFoodIds.includes(food.id);
          const isCurrentStoryStep = isStoryMode && storySteps[currentStoryStep]?.doc.id === food.id;
          
          return (
            <FoodMarker
              key={food.id}
              food={food}
              isSelected={selectedFood?.id === food.id}
              isStoryMode={isStoryMode}
              isInCurrentStory={isInCurrentStory}
              isCurrentStoryStep={isCurrentStoryStep}
              onClick={() => !isStoryMode && onFoodSelect(food)}
            />
          );
        })}
      </MapContainer>
      
    </div>
  );
};

export default MapComponent;