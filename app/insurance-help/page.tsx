'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  Shield,
  FileText,
  Clock,
  DollarSign,
  TrendingUp,
  HelpCircle,
  X,
  Camera,
  Send,
} from 'lucide-react';

export default function InsuranceHelpPage() {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [claimData, setClaimData] = useState({
    policyNumber: '',
    cropType: '',
    damageType: '',
    damageDate: '',
    estimatedLoss: '',
    description: '',
  });

  // Dummy data - replace with real data fetching later
  const insuranceSchemes = [
    {
      id: 1,
      name: t('insurance.schemes.pmfby.name'),
      description: t('insurance.schemes.pmfby.description'),
      premium: t('insurance.schemes.pmfby.premium'),
      coverage: t('insurance.schemes.pmfby.coverage'),
      status: 'active',
      image: '/agricultural-images/pmfby-scheme.jpg', // Relevant image for PMFBY
    },
    {
      id: 2,
      name: t('insurance.schemes.weather_based.name'),
      description: t('insurance.schemes.weather_based.description'),
      premium: t('insurance.schemes.weather_based.premium'),
 coverage: t('insurance.schemes.weather_based.coverage'),
      status: 'available',
      image: '/images/weather-insurance.png', // Placeholder, replace with a relevant image
    },
  ];

  const claimHistory = [
    {
      id: 'CLM001',
      date: '2024-01-15',
      crop: t('crops.rice'),
      amount: 45000,
      status: 'approved',
      reason: t('damage_types.flood'),
    },
    {
      id: 'CLM002',
      date: '2023-10-22',
      crop: t('crops.wheat'),
      amount: 32000,
      status: 'processing',
      reason: t('damage_types.hailstorm'),
    },
  ];

  // Dummy data for dropdowns - replace with real data fetching later
  const cropTypes = [
    { value: 'rice', label: t('crops.rice') },
    { value: 'wheat', label: t('crops.wheat') },
    { value: 'cotton', label: t('crops.cotton') },
  ];

  const damageTypes = [
    { value: 'flood', label: t('damage_types.flood') },
    { value: 'drought', label: t('damage_types.drought') },
    { value: 'hail', label: t('damage_types.hailstorm') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild className="text-emerald-600 hover:bg-emerald-50">
                <a href="/dashboard">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {t('back')}
                </a>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {t('insurance.title')}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {t('insurance.subtitle')}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowClaimForm(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg"
              >
                <FileText className="w-4 h-4 mr-2" />
                {t('insurance.new_claim_button')}
              </Button>
              {/* Voice Toggle - Placeholder as voice is a separate feature */}
              {/* {isVoiceEnabled && (
                <Button variant="outline" onClick={onVoiceToggle} className="border-emerald-200 bg-transparent">
                  <Volume2 className="w-4 h-4" />
                </Button>
              )} */}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 bg-white p-2 rounded-lg border border-emerald-100">
          {[
            { id: 'overview', name: t('insurance.tabs.overview'), icon: Shield },
            { id: 'schemes', name: t('insurance.tabs.schemes'), icon: FileText },
            { id: 'claims', name: t('insurance.tabs.claims_tracking'), icon: Clock },
            {
              id: 'calculator',
              name: t('insurance.tabs.premium_calculator'),
              icon: DollarSign,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedTab === tab.id ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">₹2.5L</p>
                    <p className="text-sm text-gray-600">{t('insurance.overview.total_coverage')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                    <p className="text-sm text-gray-600">{t('insurance.overview.active_policies')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-yellow-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                    <p className="text-sm text-gray-600">{t('insurance.overview.pending_claims')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-purple-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">₹77K</p>
                    <p className="text-sm text-gray-600">{t('insurance.overview.total_claims')}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-8 border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {t('insurance.overview.quick_actions.title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <button
                  onClick={() => setShowClaimForm(true)}
                  className="p-6 border-2 border-dashed border-indigo-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 text-center group"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {t('insurance.overview.quick_actions.file_claim.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('insurance.overview.quick_actions.file_claim.description')}
                  </p>
                </button>

                <button className="p-6 border-2 border-dashed border-green-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all duration-200 text-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {t('insurance.overview.quick_actions.buy_policy.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('insurance.overview.quick_actions.buy_policy.description')}
                  </p>
                </button>

                <button className="p-6 border-2 border-dashed border-blue-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {t('insurance.overview.quick_actions.help_center.title')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('insurance.overview.quick_actions.help_center.description')}
                  </p>
                </button>
              </div>
            </Card>
          </div>
        )}

        {/* Insurance Schemes Tab */}
        {selectedTab === 'schemes' && (
          <div className="space-y-6">
            {insuranceSchemes.map((scheme) => (
              <Card key={scheme.id} className="p-8 border-emerald-100 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{scheme.name}</h3>
                      <Badge
                        className={`${
                          scheme.status === 'active'
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : 'bg-blue-100 text-blue-700 border-blue-200'
                        }`}
                      >
                        {scheme.status === 'active' ? t('status.active') : t('status.available')}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-6">{scheme.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {t('insurance.schemes.premium_rate')}
                        </p>
                        <p className="font-bold text-gray-900">{scheme.premium}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {t('insurance.schemes.maximum_coverage')}
                        </p>
                        <p className="font-bold text-gray-900">{scheme.coverage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <img
                      src={scheme.image || '/placeholder.svg'}
                      alt={scheme.name}
                      className="w-32 h-32 object-cover rounded-lg mx-auto mb-4 border border-gray-200"
                    />
                    <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg">
                      {scheme.status === 'active' ? t('view_details') : t('buy_now')}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Claims Tracking Tab */}
        {selectedTab === 'claims' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">{t('insurance.tabs.claims_tracking')}</h3>
              <Button
                onClick={() => setShowClaimForm(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              >
                <FileText className="w-4 h-4 mr-2" />
                {t('insurance.new_claim_button')}
              </Button>
            </div>

            {claimHistory.map((claim) => (
              <Card key={claim.id} className="p-6 border-emerald-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">#{claim.id}</h4>
                      <p className="text-gray-600">
                        {claim.crop} - {claim.reason}
                      </p>
                      <p className="text-sm text-gray-500">{claim.date}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">₹{claim.amount.toLocaleString()}</p>
                    <Badge
                      className={`${
                        claim.status === 'approved'
                          ? 'bg-green-100 text-green-700 border-green-200'
                          : claim.status === 'processing'
                            ? 'bg-yellow-100 text-yellow-700 border-yellow-200'
                            : 'bg-red-100 text-red-700 border-red-200'
                      }`}
                    >
                      {t(`status.${claim.status}`)}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Premium Calculator Tab (Placeholder) */}
        {selectedTab === 'calculator' && (
          <Card className="p-6 border-emerald-100 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('insurance.tabs.premium_calculator')}
            </h3>
            <p className="text-gray-600">
              {t('insurance.calculator.placeholder')}
            </p>
            {/* Add Premium Calculator form/logic here */}
          </Card>
        )}
      </div>

      {/* Claim Form Modal */}
      {showClaimForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {t('insurance.new_claim_form.title')}
                </h3>
                <Button variant="ghost" onClick={() => setShowClaimForm(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="policyNumber">{t('insurance.new_claim_form.policy_number')}</Label>
                    <Input
                      id="policyNumber"
                      type="text"
                      value={claimData.policyNumber}
                      onChange={(e) => setClaimData({ ...claimData, policyNumber: e.target.value })}
                      placeholder="PMFBY123456"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cropType">{t('insurance.new_claim_form.crop_type')}</Label>
                    <select
                      id="cropType"
                      value={claimData.cropType}
                      onChange={(e) => setClaimData({ ...claimData, cropType: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">{t('select')}</option>
                      {cropTypes.map(crop => (
                         <option key={crop.value} value={crop.value}>{crop.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="damageType">{t('insurance.new_claim_form.damage_type')}</Label>
                    <select
                       id="damageType"
                       value={claimData.damageType}
                       onChange={(e) => setClaimData({ ...claimData, damageType: e.target.value })}
                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                     >
                       <option value="">{t('select')}</option>
                       {damageTypes.map(damage => (
                          <option key={damage.value} value={damage.value}>{damage.label}</option>
                       ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="damageDate">{t('insurance.new_claim_form.damage_date')}</Label>
                    <Input
                      id="damageDate"
                      type="date"
                      value={claimData.damageDate}
                      onChange={(e) => setClaimData({ ...claimData, damageDate: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="estimatedLoss">{t('insurance.new_claim_form.estimated_loss')}</Label>
                  <Input
                    id="estimatedLoss"
                    type="number"
                    value={claimData.estimatedLoss}
                    onChange={(e) => setClaimData({ ...claimData, estimatedLoss: e.target.value })}
                    placeholder="50000"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <Label htmlFor="description">{t('insurance.new_claim_form.description')}</Label>
                  <textarea
                    id="description"
                    value={claimData.description}
                    onChange={(e) => setClaimData({ ...claimData, description: e.target.value })}
                    placeholder={t('insurance.new_claim_form.description_placeholder')}
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <Label htmlFor="damagePhotos">{t('insurance.new_claim_form.damage_photos')}</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      {t('insurance.new_claim_form.upload_photos_text')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={() => setShowClaimForm(false)}
                    variant="outline"
                    className="flex-1 border-gray-200 hover:border-gray-300"
                  >
                    {t('cancel')}
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    {t('insurance.new_claim_form.submit_claim')}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}