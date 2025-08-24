'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, Wrench, Search, Filter, Star, MapPin, MessageCircle, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

interface Equipment {
  id: number;
  name: string;
  price: number;
  unit: string;
  owner: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  availability: string;
  description: string;
}

export default function EquipmentRentalPage() {
  const { t } = useTranslation();
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const handleVoiceToggle = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    if (!isVoiceEnabled) {
      console.log('Voice enabled: Equipment Rental');
    }
  };

  const equipmentList: Equipment[] = [
    {
      id: 1,
      name: t('equipment_rental.equipment_list.item1.name'),
      price: 1500,
      unit: t('equipment_rental.equipment_list.item1.unit'),
      owner: t('equipment_rental.equipment_list.item1.owner'),
      location: t('equipment_rental.equipment_list.item1.location'),
      rating: 4.7,
      reviews: 85,
      image: '/agricultural-images/power-tiller.jpg', // Updated image source
      availability: t('equipment_rental.equipment_list.item1.availability'),
      description: t('equipment_rental.equipment_list.item1.description'),
    },
    {
      id: 2,
      name: t('equipment_rental.equipment_list.item2.name'),
      price: 2500,
      unit: t('equipment_rental.equipment_list.item2.unit'),
      owner: t('equipment_rental.equipment_list.item2.owner'),
      location: t('equipment_rental.equipment_list.item2.location'),
      rating: 4.9,
      reviews: 120,
      image: '/agricultural-images/tractor.jpg', // Updated image source
      availability: t('equipment_rental.equipment_list.item2.availability'),
      description: t('equipment_rental.equipment_list.item2.description'),
    },
    // Add more equipment items as needed
  ];

  const filteredEquipment = equipmentList.filter(equipment =>
    equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    equipment.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-emerald-600 hover:bg-emerald-50 flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                {t('back')}
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{t('equipment_rental.title')}</h1>
                  <p className="text-sm text-gray-600">{t('equipment_rental.subtitle')}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('equipment_rental.search_placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>

              <Button variant="outline" className="border-emerald-200 hover:border-emerald-300">
                <Filter className="w-4 h-4 mr-2" />
                {t('filters')}
              </Button>

              {isVoiceEnabled && (
                <Button variant="outline" onClick={handleVoiceToggle} className="border-emerald-200 bg-transparent">
                  <Volume2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-6">
          {filteredEquipment.map((equipment) => (
            <Card
              key={equipment.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-emerald-100 cursor-pointer"
              onClick={() => setSelectedEquipment(equipment)}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1">
                  <img
                    src={equipment.image || '/placeholder.svg'}
                    alt={equipment.name}
                    className="w-full h-48 object-cover rounded-lg border border-gray-200"
                  />
                </div>
                <div className="md:col-span-2 p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{equipment.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-orange-600">₹{equipment.price}</span>
                    <span className="text-gray-500">/{equipment.unit}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{equipment.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{equipment.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{equipment.rating}</span>
                      <span className="text-sm text-gray-500">({equipment.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{equipment.owner}</span>
                    <Badge
                      className={`text-xs ${equipment.availability === t('equipment_rental.equipment_list.item1.availability') ? 'bg-green-100 text-green-700 border-green-200' : 'bg-yellow-100 text-yellow-700 border-yellow-200'}`}
                    >
                      {equipment.availability}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-emerald-200 hover:border-emerald-300 text-emerald-700 px-8 py-3 bg-transparent"
          >
            {t('load_more')}
          </Button>
        </div>
      </div>

      {/* Equipment Detail Modal */}
      {selectedEquipment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedEquipment.name}</h3>
                <Button variant="ghost" onClick={() => setSelectedEquipment(null)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Equipment Image */}
                <div>
                  <img
                    src={selectedEquipment.image || '/placeholder.svg'}
                    alt={selectedEquipment.name}
                    className="w-full h-80 object-cover rounded-lg border border-gray-200"
                  />
                </div>

                {/* Equipment Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-orange-600">₹{selectedEquipment.price}</span>
                      <span className="text-gray-500">/{selectedEquipment.unit}</span>
                    </div>
                    <p className="text-gray-600">{selectedEquipment.description}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">👨‍🌾</div>
                      <div>
                        <p className="font-medium">{selectedEquipment.owner}</p>
                        <p className="text-sm text-gray-500">{selectedEquipment.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{selectedEquipment.rating}</span>
                      <span className="text-gray-500">({selectedEquipment.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {t('equipment_rental.buy_now_button')}
                    </Button>
                    <Button variant="outline" className="border-emerald-200 hover:border-emerald-300 text-emerald-700 py-3 bg-transparent">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t('contact_button')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

// You will need to create or use existing icon components for:
// MountainIcon, LeafIcon, TractorIcon, ShieldCheckIcon, WheatIcon, DollarSignIcon, BarChartIcon, GlobeIcon, MicIcon