'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  Search,
  MessageCircle, // Added MessageCircle import
  MessageSquareText,
  ThumbsUp,
  Reply,
  Share,
  Bookmark,
  MoreHorizontal,
  ImageIcon,
  Award,
  X,
  Globe,
  Volume2,
  Send, // Added Send import
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
// Import useRouter from next/navigation
import { useRouter } from 'next/navigation';

export default function CommunityForumPage() {
  const { t, i18n } = useTranslation();
  const router = useRouter(); // Initialize useRouter
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'general', image: null });
  const [searchQuery, setSearchQuery] = useState('');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false); // Assuming voice state is managed here or passed down

  const onBack = () => {
    router.push('/dashboard');
  };

  const onVoiceToggle = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    if (!isVoiceEnabled) {
      console.log('Voice enabled: Community forum voice guidance activated');
    }
  };


  const categories = [
    { id: 'all', name: t('community.category.all'), icon: '🌾', color: 'bg-emerald-500' },
    { id: 'crops', name: t('community.category.crop_advice'), icon: '🌱', color: 'bg-green-500' },
    {
      id: 'weather',
      name: t('community.category.weather_discussion'),
      icon: '🌤️',
      color: 'bg-blue-500',
    },
    {
      id: 'equipment',
      name: t('community.category.equipment_tips'),
      icon: '🚜',
      color: 'bg-orange-500',
    },
    {
      id: 'market',
      name: t('community.category.market_news'),
      icon: '📈',
      color: 'bg-purple-500',
    },
    {
      id: 'success',
      name: t('community.category.success_stories'),
      icon: '🏆',
      color: 'bg-yellow-500',
    },
  ];

  // Dummy data for forum posts - replace with actual data fetching
  const forumPosts = [
    {
      id: 1,
      title: t('community.post.rice_leaves.title'),
      content: t('community.post.rice_leaves.content'),
      author: t('community.post.rice_leaves.author'),
      location: t('community.post.rice_leaves.location'),
      category: 'crops',
      likes: 24,
      replies: 8,
      timeAgo: t('community.post.rice_leaves.time_ago'),
 image: '/agricultural-images/rice-leaves.jpg', // Image related to rice leaves issue
      avatar: '👨‍🌾',
      isExpert: false,
    },
    {
      id: 2,
      title: t('community.post.organic_fertilizer.title'),
      content: t('community.post.organic_fertilizer.content'),
      author: t('community.post.organic_fertilizer.author'),
      location: t('community.post.organic_fertilizer.location'),
      category: 'success',
      likes: 156,
      replies: 23,
      timeAgo: t('community.post.organic_fertilizer.time_ago'),
 image: '/agricultural-images/organic-fertilizer.jpg', // Image of organic fertilizer/compost
      avatar: '👩‍🌾',
      isExpert: false,
    },
    {
      id: 3,
      title: t('community.post.heavy_rain_alert.title'),
      content: t('community.post.heavy_rain_alert.content'),
      author: t('community.post.heavy_rain_alert.author'),
      location: t('community.post.heavy_rain_alert.location'),
      category: 'weather',
      likes: 89,
      replies: 15,
      timeAgo: t('community.post.heavy_rain_alert.time_ago'),
 image: '/agricultural-images/heavy-rain-farm.jpg', // Image related to heavy rain on a farm
      avatar: '👨‍💼',
      isExpert: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack} className="text-emerald-600 hover:bg-emerald-50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t('back')}
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {t('community.title')}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {t('community.active_farmers', { count: 50000 })}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('community.search_posts_placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>

              <Button
                onClick={() => setShowCreatePost(true)}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg"
              >
                <MessageSquareText className="w-4 h-4 mr-2" />
                {t('community.new_post_button')}
              </Button>

              {isVoiceEnabled && (
                <Button variant="outline" onClick={onVoiceToggle} className="border-emerald-200 bg-transparent">
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
            <Card className="p-6 mb-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900">
                {t('community.categories_title')}
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `${category.color} text-white shadow-lg`
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Community Stats */}
            <Card className="p-6 border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900">
                {t('community.stats_title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('community.stats.total_members')}</span>
                  <span className="font-bold text-emerald-600">50,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('community.stats.todays_posts')}</span>
                  <span className="font-bold text-blue-600">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('community.stats.online_now')}</span>
                  <span className="font-bold text-green-600">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('community.stats.experts')}</span>
                  <span className="font-bold text-purple-600">89</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Forum Posts */}
            <div className="space-y-6">
              {forumPosts.map((post) => (
                <Card key={post.id} className="p-6 hover:shadow-lg transition-all duration-300 border-emerald-100">
                  <div className="flex items-start gap-4">
                    {/* Author Avatar */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">
                        {post.avatar}
                      </div>
                      {post.isExpert && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      {/* Post Header */}
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900">{post.author}</h4>
                        {post.isExpert && (
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                            {t('community.expert_badge')}
                          </Badge>
                        )}
                        <span className="text-gray-500 text-sm"> • </span>
                        <span className="text-gray-500 text-sm">{post.location}</span>
                        <span className="text-gray-500 text-sm"> • </span>
                        <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                      </div>

                      {/* Post Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-emerald-600 cursor-pointer">
                        {post.title}
                      </h3>

                      {/* Post Content */}
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.content}</p>

                      {/* Post Image */}
                      {post.image && (
                        <div className="mb-4">
                          <img
                            src={post.image || '/placeholder.svg'} // Still using placeholder here, will replace later
                            alt="Post image"
                            className="w-full max-w-md h-48 object-cover rounded-lg border border-gray-200"
                          />
                        </div>
                      )}

                      {/* Post Actions */}
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="font-medium">{post.likes}</span>
                          <span className="text-sm">{t('community.action.likes')}</span>
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                          <Reply className="w-4 h-4" />
                          <span className="font-medium">{post.replies}</span>
                          <span className="text-sm">{t('community.action.replies')}</span>
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                          <Share className="w-4 h-4" />
                          <span className="text-sm">{t('community.action.share')}</span>
                        </button>

                        <button className="flex items-center gap-2 text-gray-500 hover:text-yellow-600 transition-colors">
                          <Bookmark className="w-4 h-4" />
                          <span className="text-sm">{t('community.action.save')}</span>
                        </button>

                        <button className="ml-auto text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
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
                {t('community.load_more_posts')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {t('community.create_post_modal.title')}
                </h3>
                <Button variant="ghost" onClick={() => setShowCreatePost(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('community.create_post_modal.title_label')}
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder={t('community.create_post_modal.title_placeholder')}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('community.create_post_modal.category_label')}
                  </Label>
                  <select
                    id="category"
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {categories.slice(1).map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('community.create_post_modal.description_label')}
                  </Label>
                  <Textarea
                    id="content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder={t('community.create_post_modal.description_placeholder')}
                    rows={6}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <Label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('community.create_post_modal.add_image_label')}
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                    <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      {t('community.create_post_modal.upload_image_text')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={() => setShowCreatePost(false)}
                    variant="outline"
                    className="flex-1 border-gray-200 hover:border-gray-300"
                  >
                    {t('cancel')}
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    {t('community.create_post_modal.post_button')}
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