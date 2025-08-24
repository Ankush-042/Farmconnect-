'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft,
  Search,
  Filter,
  Grid,
  List,
  ShoppingCart,
  Heart,
  MapPin,
  Star,
  CheckCircle,
  MessageCircle,
  Volume2,
  ImageIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export default function Marketplace() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false); // Assuming voice state is managed here or contextually
  const router = useRouter();

  const categories = [
    { id: 'all', name: t('marketplace.categories.all'), icon: '🌾', count: 1247 },
    {
      id: 'grains',
      name: t('marketplace.categories.grains'),
      icon: '🌾',
      count: 456,
    },
    {
      id: 'vegetables',
      name: t('marketplace.categories.vegetables'),
      icon: '🥕',
      count: 234,
    },
    { id: 'fruits', name: t('marketplace.categories.fruits'), icon: '🍎', count: 189 },
    { id: 'dairy', name: t('marketplace.categories.dairy'), icon: '🥛', count: 123 },
    {
      id: 'organic',
      name: t('marketplace.categories.organic'),
      icon: '🌱',
      count: 245,
    },
  ];

  const products = [
    {
      id: 1,
      name: t('marketplace.products.basmati_rice.name'),
      price: 85,
      unit: t('marketplace.products.unit_per_kg'),
      originalPrice: 95,
      seller: t('marketplace.products.seller_rajesh'),
      location: t('marketplace.products.location_punjab'),
      rating: 4.8,
      reviews: 156,
      image: '/images/basmati-rice.jpg', 
      category: 'grains',
      inStock: true,
      quantity: t('marketplace.products.quantity_available', { count: 500, unit: 'kg' }),
      description: t('marketplace.products.basmati_rice.description'),
      verified: true,
      fastDelivery: true,
      organic: false,
    },
    {
      id: 2,
      name: t('marketplace.products.fresh_tomatoes.name'),
      price: 25,
      unit: t('marketplace.products.unit_per_kg'),
      originalPrice: 30,
      seller: t('marketplace.products.seller_sunita'),
      location: t('marketplace.products.location_haryana'),
      rating: 4.6,
      reviews: 89,
      image: '/images/fresh-tomatoes.jpg', 
      category: 'vegetables',
      inStock: true,
      quantity: t('marketplace.products.quantity_available', { count: 200, unit: 'kg' }),
      description: t('marketplace.products.fresh_tomatoes.description'),
      verified: true,
      fastDelivery: true,
      organic: true,
    },
    {
      id: 3,
      name: t('marketplace.products.wheat_sharbati.name'),
      price: 22,
      unit: t('marketplace.products.unit_per_kg'),
      originalPrice: 25,
      seller: t('marketplace.products.seller_amit'),
      location: t('marketplace.products.location_madhya_pradesh'),
      rating: 4.9,
      reviews: 234,
      image: '/images/wheat-sharbati.jpg', 
      category: 'grains',
      inStock: true,
      quantity: t('marketplace.products.quantity_available', { count: 1000, unit: 'kg' }),
      description: t('marketplace.products.wheat_sharbati.description'),
      verified: true,
      fastDelivery: false,
      organic: false,
    },
    {
      id: 4,
      name: t('marketplace.products.organic_milk.name'),
      price: 65,
      unit: t('marketplace.products.unit_per_liter'),
      originalPrice: 70,
      seller: t('marketplace.products.seller_gopal_dairy'),
      location: t('marketplace.products.location_rajasthan'),
      rating: 4.7,
      reviews: 67,
      image: '/images/organic-milk.jpg', 
      category: 'dairy',
      inStock: true,
      quantity: t('marketplace.products.quantity_available', { count: 50, unit: 'liter' }),
      description: t('marketplace.products.organic_milk.description'),
      verified: true,
      fastDelivery: true,
      organic: true,
    },
    // Add more products with relevant agricultural images
  ];

  const onBack = () => {
    router.push('/dashboard');
  };

  const onVoiceToggle = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    // Implement actual voice toggle logic here
    console.log('Voice toggle clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-emerald-600 hover:bg-emerald-50"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t('back')}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {t('marketplace.title')}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {t('marketplace.products_available', { count: 1247 })}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder={t('marketplace.search_placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-emerald-200 hover:border-emerald-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                {t('marketplace.filters')}
              </Button>

              <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {isVoiceEnabled && (
                <Button
                  variant="outline"
                  onClick={onVoiceToggle}
                  className="border-emerald-200 bg-transparent"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="p-6 mb-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t('marketplace.categories.title')}
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Price Filter */}
            <Card className="p-6 mb-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t('marketplace.price_range.title')}
              </h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={10000}
                  step={100}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </Card>

            {/* Quick Filters */}
            <Card className="p-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t('marketplace.quick_filters.title')}
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">
                    {t('marketplace.quick_filters.organic')}
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">
                    {t('marketplace.quick_filters.fast_delivery')}
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">
                    {t('marketplace.quick_filters.verified_seller')}
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">
                    {t('marketplace.quick_filters.in_stock')}
                  </span>
                </label>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t('marketplace.products.section_title')}</h2>
                <p className="text-gray-600">
                  {t('marketplace.products_found', { count: products.length })}
                </p>
              </div>

              <select className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="relevance">{t('marketplace.sort_by.relevance')}</option>
                <option value="price-low">{t('marketplace.sort_by.price_low_high')}</option>
                <option value="price-high">{t('marketplace.sort_by.price_high_low')}</option>
                <option value="rating">{t('marketplace.sort_by.rating')}</option>
                <option value="newest">{t('marketplace.sort_by.newest')}</option>
              </select>
            </div>

            {/* Product Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
              }`}
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-emerald-100 cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative">
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.organic && (
                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                          🌱 {t('marketplace.quick_filters.organic')}
                        </Badge>
                      )}
                      {product.fastDelivery && (
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                          ⚡ {t('marketplace.quick_filters.fast_delivery')}
                        </Badge>
                      )}
                    </div>

                    {/* Discount */}
                    {product.originalPrice > product.price && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-emerald-600">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-gray-500 line-through text-sm">
                          ₹{product.originalPrice}
                        </span>
                      )}
                      <span className="text-gray-500">/{product.unit}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        {product.verified && (
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        )}
                        <span>{product.seller}</span>
                      </div>
                      <Badge
                        className={`text-xs ${
                          product.inStock
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : 'bg-red-100 text-red-700 border-red-200'
                        }`}
                      >
                        {product.inStock ? t('in_stock') : t('out_of_stock')}
                      </Badge>
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
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProduct.name}
                  </h3>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedProduct(null)}
                  >
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
                  {/* Product Image */}
                  <div>
                    <img
                      src={selectedProduct.image || '/placeholder.svg'}
                      alt={selectedProduct.name}
                      className="w-full h-80 object-cover rounded-lg border border-gray-200"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-emerald-600">
                          ₹{selectedProduct.price}
                        </span>
                        {selectedProduct.originalPrice >
                          selectedProduct.price && (
                          <span className="text-gray-500 line-through text-lg">
                            ₹{selectedProduct.originalPrice}
                          </span>
                        )}
                        <span className="text-gray-500">
                          /{selectedProduct.unit}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {selectedProduct.verified && (
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{selectedProduct.seller}</p>
                          <p className="text-sm text-gray-500">
                            <MapPin className="w-3 h-3 inline-block mr-1" />
                            {selectedProduct.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">
                          {selectedProduct.rating}
                        </span>
                        <span className="text-gray-500">
                          ({selectedProduct.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      {selectedProduct.organic && (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          🌱 {t('marketplace.quick_filters.organic')}
                        </Badge>
                      )}
                      {selectedProduct.fastDelivery && (
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          ⚡ {t('marketplace.quick_filters.fast_delivery')}
                        </Badge>
                      )}
                       <Badge
                        className={`${
                          selectedProduct.inStock
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : 'bg-red-100 text-red-700 border-red-200'
                        }`}
                      >
                        {selectedProduct.inStock ? t('in_stock') : t('out_of_stock')}
                      </Badge>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t('marketplace.quantity_available')}</p>
                      <p className="font-bold text-gray-900">{selectedProduct.quantity}</p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        {t('marketplace.add_to_cart')}
                      </Button>
                      <Button
                        variant="outline"
                        className="border-emerald-200 hover:border-emerald-300 text-emerald-700 py-3 bg-transparent"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {t('contact_seller')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}