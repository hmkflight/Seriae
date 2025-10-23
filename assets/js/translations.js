// SERIAE Translation System
// Comprehensive translations for English and Japanese

const translations = {
    en: {
        // Navigation
        'nav.dashboard': 'Dashboard',
        'nav.buyer.menu': 'Buyer Menu',
        'nav.seller.menu': 'Seller Menu',
        'nav.user.management': 'User Management',
        'nav.profile': 'Profile',
        'nav.logout': 'Logout',

        // Buyer Menu
        'buyer.browse.collections': 'Browse Collections',
        'buyer.active.auctions': 'Active Auctions',
        'buyer.bidding.history': 'Bidding History',
        'buyer.watchlist': 'Watchlist',
        'buyer.purchase.history': 'Purchase History',

        // Seller Menu
        'seller.product.registration': 'Product Registration',
        'seller.product.list': 'Product List',
        'seller.exhibition.list': 'Exhibition List',
        'seller.sales.analytics': 'Sales Analytics',
        'seller.consignment.status': 'Consignment Status',

        // User Management
        'user.terms.of.use': 'Terms of Use',
        'user.contact.us': 'Contact Us',
        'user.support.center': 'Support Center',
        'user.privacy.policy': 'Privacy Policy',

        // Profile Menu
        'profile.my.profile': 'My Profile',
        'profile.account.settings': 'Account Settings',
        'profile.shipping.address': 'Shipping Address',
        'profile.bank.accounts': 'Bank Accounts',
        'profile.member.status': 'Premium',
        'profile.member.name': 'Seriae Member',

        // Hero Section
        'hero.title.line1': 'Curated Excellence.',
        'hero.title.line2': 'Timeless Luxury.',
        'hero.subtitle': "The world's most distinguished pre-owned luxury pieces,<br>authenticated and curated for the discerning collector",
        'hero.btn.collections': 'View Collections',
        'hero.btn.consignment': 'Private Consignment',

        // Hero Prestige
        'prestige.heritage': 'Heritage',
        'prestige.since': 'Since 1987',
        'prestige.authenticated': 'Authenticated',
        'prestige.percent': '100%',
        'prestige.membership': 'Membership',
        'prestige.private': 'Private',

        // Featured Auctions
        'auctions.title': 'Current Selections',
        'auctions.subtitle': 'Exceptional pieces available now',
        'auctions.submit.interest': 'Submit Interest',
        'auctions.private.viewing': 'Private Viewing',
        'auctions.time.remaining': 'remaining',
        'auctions.active.bidding': 'Active bidding',
        'auctions.by.appointment': 'By appointment',

        // Product Details
        'product.neverfull': 'Neverfull MM Damier Ebene',
        'product.chanel.flap': 'Classic Flap Medium',
        'product.birkin': 'Birkin 35 Togo Leather',
        'product.gmt.master': 'GMT-Master II Pepsi',
        'product.brand.lv': 'Louis Vuitton',
        'product.brand.chanel': 'Chanel',
        'product.brand.hermes': 'Hermès',
        'product.brand.rolex': 'Rolex',
        'product.condition.pristine': 'Pristine Condition',
        'product.condition.excellent': 'Excellent Condition',
        'product.condition.museum': 'Museum Quality',
        'product.condition.unworn': 'Unworn',

        // Philosophy Section
        'philosophy.title': 'The Seriae Philosophy',
        'philosophy.text1': 'Excellence is not an achievement but a standard. Every piece in our collection represents a legacy of craftsmanship, authenticated through our rigorous verification process and curated by our team of luxury specialists.',
        'philosophy.text2': 'We believe that luxury transcends ownership—it embodies artistry, heritage, and the pursuit of perfection.',
        'philosophy.pieces.authenticated': 'Pieces Authenticated',
        'philosophy.luxury.partners': 'Luxury Partners',
        'philosophy.years.experience': 'Years Experience',

        // Footer
        'footer.tagline': 'Curating excellence in luxury resale since 1987',
        'footer.collections': 'Collections',
        'footer.handbags.accessories': 'Handbags & Accessories',
        'footer.fine.timepieces': 'Fine Timepieces',
        'footer.private.consignment': 'Private Consignment',
        'footer.authentication.services': 'Authentication Services',
        'footer.experience': 'Experience',
        'footer.private.showroom': 'Private Showroom',
        'footer.personal.curator': 'Personal Curator',
        'footer.member.services': 'Member Services',
        'footer.heritage.stories': 'Heritage Stories',
        'footer.copyright': '© 2024 Seriae. All rights reserved. | London | New York | Geneva',

        // Dashboard
        'dashboard.title': 'Dashboard',
        'dashboard.subtitle': 'Welcome to your exclusive Seriae experience',
        'dashboard.news.title': 'News from Management',
        'dashboard.news.badge': 'Latest',
        'dashboard.items.title': 'Pending & Returned Items',
        'dashboard.auction.title': 'Bidding Auction Information',
        'dashboard.auction.badge': 'Live',
        'dashboard.actions.title': 'Quick Actions',

        // Dashboard News
        'news.holiday.title': 'Exclusive Holiday Collection',
        'news.holiday.text': 'Discover our curated selection of rare Hermès pieces, including a pristine Birkin 35 in Rouge H and limited edition timepieces from Patek Philippe.',
        'news.auth.title': 'Authentication Standards Update',
        'news.auth.text': "We've enhanced our verification process with new technology ensuring 99.9% accuracy in luxury goods authentication.",
        'news.geneva.title': 'Private Geneva Showroom Opening',
        'news.geneva.text': 'Join us for an exclusive viewing of exceptional pieces at our new Geneva location on December 20th.',
        'news.read.more': 'Read More',
        'news.learn.more': 'Learn More',
        'news.rsvp': 'RSVP',

        // Item Status
        'status.pending': 'Pending',
        'status.returned': 'Returned',
        'status.winning': 'Winning',
        'status.outbid': 'Outbid',
        'status.watching': 'Watching',

        // Item Descriptions
        'item.auth.progress': 'Authentication in progress',
        'item.returned.verification': 'Returned for additional verification',
        'item.final.check': 'Final quality check',
        'item.current.bid': 'Current Bid:',

        // Quick Actions
        'action.list.item': 'List New Item',
        'action.browse.collections': 'Browse Collections',
        'action.view.analytics': 'View Analytics',
        'action.contact.support': 'Contact Support',
        'action.view.all.items': 'View All Items',
        'action.view.all.auctions': 'View All Auctions',

        // Sidebar
        'sidebar.account.center': 'Account Center',
        'sidebar.team.management': 'Team Management',
        'sidebar.change.password': 'Change Password',
        'sidebar.settings': 'Settings',

        // Profile Page
        'profile.title': 'Profile',
        'profile.subtitle': 'Manage your account information and preferences',
        'profile.personal.info': 'Personal Information',
        'profile.edit.profile': 'Edit Profile',
        'profile.member.since': 'Member since January 2020',
        'profile.premium.member': 'Seriae Premium Member',
        'profile.first.name': 'First Name',
        'profile.last.name': 'Last Name',
        'profile.email': 'Email Address',
        'profile.phone': 'Phone Number',
        'profile.language': 'Preferred Language',
        'profile.timezone': 'Time Zone',
        'profile.preferences': 'Preferences & Notifications',
        'profile.interests': 'Collection Interests',
        'profile.notifications': 'Notification Settings',
        'profile.recent.activity': 'Recent Activity',

        // Badges
        'badge.premium': 'Premium',
        'badge.verified': 'Verified',
        'badge.collector': 'Collector',

        // Notifications
        'notif.auction.alerts': 'New auction alerts',
        'notif.bidding.updates': 'Bidding updates',
        'notif.newsletter': 'Weekly newsletter',
        'notif.price.drops': 'Price drop notifications',

        // Activity
        'activity.placed.bid': 'Placed bid on',
        'activity.added.watchlist': 'Added',
        'activity.to.watchlist': 'to watchlist',
        'activity.sold': 'Successfully sold',
        'activity.hours.ago': 'hours ago',
        'activity.day.ago': 'day ago',
        'activity.days.ago': 'days ago',

        // Seller Registration
        'seller.register.title': 'Product Registration',
        'seller.register.subtitle': 'Submit your luxury item for consignment',
        'seller.register.info.title': 'Consignment Process',
        'seller.register.step1.title': 'Submit Details',
        'seller.register.step1.desc': 'Complete the registration form with your item information',
        'seller.register.step2.title': 'Authentication',
        'seller.register.step2.desc': 'Our experts verify authenticity and condition',
        'seller.register.step3.title': 'Listing',
        'seller.register.step3.desc': 'Item goes live in our curated marketplace',
        'seller.register.step4.title': 'Sale & Payment',
        'seller.register.step4.desc': 'Receive payment within 5 business days after sale',
        'seller.register.fees.title': 'Commission Rates',
        'seller.register.fees.standard': 'Standard Items:',
        'seller.register.fees.premium': 'Premium Items ($10k+):',
        'seller.register.fees.rare': 'Rare Pieces ($50k+):',
        'seller.register.section.item': 'Item Information',
        'seller.register.section.authenticity': 'Authenticity & Documentation',
        'seller.register.section.contact': 'Contact Information',
        'seller.register.section.terms': 'Terms & Conditions',
        'seller.register.field.brand': 'Brand *',
        'seller.register.field.model': 'Model/Style Name *',
        'seller.register.field.category': 'Category *',
        'seller.register.field.year': 'Year of Purchase',
        'seller.register.field.condition': 'Condition *',
        'seller.register.field.description': 'Description *',
        'seller.register.field.price': 'Desired Price (USD) *',
        'seller.register.field.documents': 'Available Documents',
        'seller.register.field.serial': 'Serial Number / Date Code',
        'seller.register.field.purchase': 'Where was it purchased?',
        'seller.register.field.name': 'Full Name *',
        'seller.register.field.email': 'Email *',
        'seller.register.field.phone': 'Phone Number *',
        'seller.register.field.contact': 'Preferred Contact Method *',
        'seller.register.hint.description': 'Include details about materials, hardware, size, and any unique features',
        'seller.register.hint.price': 'Our team will review and may suggest adjustments based on market value',
        'seller.register.doc.receipt': 'Original Receipt',
        'seller.register.doc.certificate': 'Certificate of Authenticity',
        'seller.register.doc.box': 'Original Box/Packaging',
        'seller.register.doc.dustbag': 'Dust Bag',
        'seller.register.doc.warranty': 'Warranty Card',
        'seller.register.terms.ownership': 'I confirm I am the rightful owner of this item',
        'seller.register.terms.authentic': 'I confirm this item is authentic to the best of my knowledge',
        'seller.register.terms.agreement': "I agree to SERIAE's consignment terms and commission structure",
        'seller.register.submit': 'Submit for Review',

        // Collections
        'collections.title': 'Luxury Collections',
        'collections.subtitle': 'Authenticated pre-owned luxury pieces',
        'collections.filter.category': 'Category',
        'collections.filter.status': 'Status',
        'collections.filter.sort': 'Sort by',
        'collections.category.all': 'All Categories',
        'collections.category.handbags': 'Handbags',
        'collections.category.timepieces': 'Timepieces',
        'collections.status.all': 'All Items',
        'collections.status.available': 'Available',
        'collections.status.auction': 'Auction',
        'collections.status.appointment': 'By Appointment',
        'collections.sort.newest': 'Newest First',
        'collections.sort.price.asc': 'Price: Low to High',
        'collections.sort.price.desc': 'Price: High to Low',
        'collections.sort.brand': 'Brand A-Z',
        'collections.no.results': 'No items match your filters',
        'collections.badge.auction': 'Auction',
        'collections.badge.appointment': 'By Appointment',

        // Auctions
        'auctions.stat.active': 'Active Auctions',
        'auctions.stat.yourbids': 'Your Active Bids',
        'auctions.stat.endingsoon': 'Ending Within 24h',
        'auctions.no.active': 'No active auctions at this time',
        'auctions.browse.collections': 'Browse Collections',
        'auctions.modal.title': 'Place Your Bid',
        'auctions.form.amount': 'Bid Amount (USD)',
        'auctions.form.current': 'Current bid:',
        'auctions.form.terms': 'I agree to the auction terms and conditions',
        'auctions.form.submit': 'Place Bid',
        'auctions.current.bid': 'Current Bid',
        'auctions.your.bid': 'Your Bid',
        'auctions.place.bid': 'Place Bid',
        'auctions.history.subtitle': 'Review your past and current bids',
        'auctions.history.empty': 'No bidding history yet',

        // Watchlist
        'watchlist.title': 'Your Watchlist',
        'watchlist.subtitle': 'Items you\'re watching',
        'watchlist.empty.title': 'Your watchlist is empty',
        'watchlist.empty.subtitle': 'Start browsing to add items to your watchlist',
        'watchlist.browse': 'Browse Collections',

        // Purchases
        'purchases.title': 'Purchase History',
        'purchases.subtitle': 'Your acquired luxury pieces',
        'purchases.empty.title': 'No Purchase History',
        'purchases.empty.subtitle': 'Your purchased items will appear here',
        'purchases.browse': 'Browse Collections',
        'purchases.purchased': 'Purchased:',
        'purchases.price': 'Purchase Price:',
        'purchases.contact.support': 'Contact Support',
        'purchases.track': 'Track Shipment',

        // Accessibility
        'accessibility.skip': 'Skip to content',

        // Common
        'common.cancel': 'Cancel',

        // Coming Soon
        'coming.soon.title': 'This page is under construction. Feature coming soon.',
        'coming.soon.subtitle': "We're working on it — thank you for your patience.",
        'coming.soon.back': 'Back to Home',

        // Time
        'time.hours': 'h',
        'time.minutes': 'm',
        'time.days': 'd',
        'time.remaining': 'remaining',

        // Common
        'common.view.all': 'View All',
        'common.english': 'English',
        'common.japanese': 'Japanese'
    },
    ja: {
        // Navigation
        'nav.dashboard': 'ダッシュボード',
        'nav.buyer.menu': 'バイヤーメニュー',
        'nav.seller.menu': 'セラーメニュー',
        'nav.user.management': 'ユーザー管理',
        'nav.profile': 'プロフィール',
        'nav.logout': 'ログアウト',

        // Buyer Menu
        'buyer.browse.collections': 'コレクション閲覧',
        'buyer.active.auctions': 'アクティブオークション',
        'buyer.bidding.history': '入札履歴',
        'buyer.watchlist': 'ウォッチリスト',
        'buyer.purchase.history': '購入履歴',

        // Seller Menu
        'seller.product.registration': '商品登録',
        'seller.product.list': '商品リスト',
        'seller.exhibition.list': '展示リスト',
        'seller.sales.analytics': '売上分析',
        'seller.consignment.status': '委託状況',

        // User Management
        'user.terms.of.use': '利用規約',
        'user.contact.us': 'お問い合わせ',
        'user.support.center': 'サポートセンター',
        'user.privacy.policy': 'プライバシーポリシー',

        // Profile Menu
        'profile.my.profile': 'マイプロフィール',
        'profile.account.settings': 'アカウント設定',
        'profile.shipping.address': '配送先住所',
        'profile.bank.accounts': '銀行口座',
        'profile.member.status': 'プレミアム',
        'profile.member.name': 'セリエメンバー',

        // Hero Section
        'hero.title.line1': '厳選された優秀性。',
        'hero.title.line2': '永遠の贅沢。',
        'hero.subtitle': '世界最高級の中古ラグジュアリー品を<br>鑑定し、目の肥えたコレクターのために厳選',
        'hero.btn.collections': 'コレクション閲覧',
        'hero.btn.consignment': 'プライベート委託',

        // Hero Prestige
        'prestige.heritage': '伝統',
        'prestige.since': '1987年創業',
        'prestige.authenticated': '認証済み',
        'prestige.percent': '100%',
        'prestige.membership': 'メンバーシップ',
        'prestige.private': 'プライベート',

        // Featured Auctions
        'auctions.title': '現在の選択',
        'auctions.subtitle': '今すぐ入手可能な特別な商品',
        'auctions.submit.interest': '関心表明',
        'auctions.private.viewing': 'プライベート鑑賞',
        'auctions.time.remaining': '残り',
        'auctions.active.bidding': 'アクティブ入札',
        'auctions.by.appointment': '予約制',

        // Product Details
        'product.neverfull': 'ネヴァーフル MM ダミエ・エベヌ',
        'product.chanel.flap': 'クラシックフラップ ミディアム',
        'product.birkin': 'バーキン35 トゴレザー',
        'product.gmt.master': 'GMT マスター II ペプシ',
        'product.brand.lv': 'ルイ・ヴィトン',
        'product.brand.chanel': 'シャネル',
        'product.brand.hermes': 'エルメス',
        'product.brand.rolex': 'ロレックス',
        'product.condition.pristine': '極美品',
        'product.condition.excellent': '優秀品',
        'product.condition.museum': '博物館品質',
        'product.condition.unworn': '未使用',

        // Philosophy Section
        'philosophy.title': 'セリエの哲学',
        'philosophy.text1': '優秀性は成果ではなく基準です。コレクション内のすべての作品は、厳格な検証プロセスを通じて認証され、ラグジュアリー専門家チームによって厳選された職人技の遺産を表しています。',
        'philosophy.text2': '私たちは、ラグジュアリーは所有を超越し、芸術性、伝統、完璧の追求を体現していると信じています。',
        'philosophy.pieces.authenticated': '認証済み作品',
        'philosophy.luxury.partners': 'ラグジュアリーパートナー',
        'philosophy.years.experience': '年の経験',

        // Footer
        'footer.tagline': '1987年よりラグジュアリー再販における優秀性を厳選',
        'footer.collections': 'コレクション',
        'footer.handbags.accessories': 'ハンドバッグ・アクセサリー',
        'footer.fine.timepieces': '高級時計',
        'footer.private.consignment': 'プライベート委託',
        'footer.authentication.services': '認証サービス',
        'footer.experience': '体験',
        'footer.private.showroom': 'プライベートショールーム',
        'footer.personal.curator': 'パーソナルキュレーター',
        'footer.member.services': 'メンバーサービス',
        'footer.heritage.stories': '伝統の物語',
        'footer.copyright': '© 2024 セリエ. 全著作権所有. | ロンドン | ニューヨーク | ジュネーブ',

        // Dashboard
        'dashboard.title': 'ダッシュボード',
        'dashboard.subtitle': '専用セリエ体験へようこそ',
        'dashboard.news.title': '経営からのニュース',
        'dashboard.news.badge': '最新',
        'dashboard.items.title': '保留・返品商品',
        'dashboard.auction.title': '入札オークション情報',
        'dashboard.auction.badge': 'ライブ',
        'dashboard.actions.title': 'クイックアクション',

        // Dashboard News
        'news.holiday.title': '限定ホリデーコレクション',
        'news.holiday.text': 'ルージュHのバーキン35や、パテック・フィリップの限定版時計を含む、希少なエルメス作品の厳選セレクションをご覧ください。',
        'news.auth.title': '認証基準の更新',
        'news.auth.text': '新技術により検証プロセスを強化し、ラグジュアリー品認証において99.9%の精度を確保しました。',
        'news.geneva.title': 'プライベートジュネーブショールーム開店',
        'news.geneva.text': '12月20日、ジュネーブの新店舗で特別な作品の専用鑑賞会にご参加ください。',
        'news.read.more': '詳細を読む',
        'news.learn.more': '詳細を見る',
        'news.rsvp': 'RSVP',

        // Item Status
        'status.pending': '保留中',
        'status.returned': '返品',
        'status.winning': '落札中',
        'status.outbid': '入札負け',
        'status.watching': '監視中',

        // Item Descriptions
        'item.auth.progress': '認証進行中',
        'item.returned.verification': '追加検証のため返品',
        'item.final.check': '最終品質チェック',
        'item.current.bid': '現在の入札額：',

        // Quick Actions
        'action.list.item': '新規商品登録',
        'action.browse.collections': 'コレクション閲覧',
        'action.view.analytics': '分析表示',
        'action.contact.support': 'サポート連絡',
        'action.view.all.items': '全商品表示',
        'action.view.all.auctions': '全オークション表示',

        // Sidebar
        'sidebar.account.center': 'アカウントセンター',
        'sidebar.team.management': 'チーム管理',
        'sidebar.change.password': 'パスワード変更',
        'sidebar.settings': '設定',

        // Profile Page
        'profile.title': 'プロフィール',
        'profile.subtitle': 'アカウント情報と設定を管理',
        'profile.personal.info': '個人情報',
        'profile.edit.profile': 'プロフィール編集',
        'profile.member.since': '2020年1月よりメンバー',
        'profile.premium.member': 'セリエプレミアムメンバー',
        'profile.first.name': '名',
        'profile.last.name': '姓',
        'profile.email': 'メールアドレス',
        'profile.phone': '電話番号',
        'profile.language': '優先言語',
        'profile.timezone': 'タイムゾーン',
        'profile.preferences': '設定・通知',
        'profile.interests': 'コレクション関心',
        'profile.notifications': '通知設定',
        'profile.recent.activity': '最近のアクティビティ',

        // Badges
        'badge.premium': 'プレミアム',
        'badge.verified': '認証済み',
        'badge.collector': 'コレクター',

        // Notifications
        'notif.auction.alerts': '新規オークション通知',
        'notif.bidding.updates': '入札更新',
        'notif.newsletter': '週刊ニュースレター',
        'notif.price.drops': '価格下落通知',

        // Activity
        'activity.placed.bid': '入札しました',
        'activity.added.watchlist': '追加しました',
        'activity.to.watchlist': 'をウォッチリストに',
        'activity.sold': '販売成功',
        'activity.hours.ago': '時間前',
        'activity.day.ago': '日前',
        'activity.days.ago': '日前',

        // Seller Registration
        'seller.register.title': '商品登録',
        'seller.register.subtitle': 'ラグジュアリー商品を委託に提出',
        'seller.register.info.title': '委託プロセス',
        'seller.register.step1.title': '詳細提出',
        'seller.register.step1.desc': '商品情報を含む登録フォームを記入',
        'seller.register.step2.title': '認証',
        'seller.register.step2.desc': '専門家が真正性と状態を確認',
        'seller.register.step3.title': 'リスティング',
        'seller.register.step3.desc': '厳選されたマーケットプレイスに商品が公開',
        'seller.register.step4.title': '販売と支払い',
        'seller.register.step4.desc': '販売後5営業日以内に支払いを受け取る',
        'seller.register.fees.title': '手数料率',
        'seller.register.fees.standard': '標準商品：',
        'seller.register.fees.premium': 'プレミアム商品（$10k+）：',
        'seller.register.fees.rare': 'レア商品（$50k+）：',
        'seller.register.section.item': '商品情報',
        'seller.register.section.authenticity': '真正性と文書',
        'seller.register.section.contact': '連絡先情報',
        'seller.register.section.terms': '利用規約',
        'seller.register.field.brand': 'ブランド *',
        'seller.register.field.model': 'モデル/スタイル名 *',
        'seller.register.field.category': 'カテゴリ *',
        'seller.register.field.year': '購入年',
        'seller.register.field.condition': '状態 *',
        'seller.register.field.description': '説明 *',
        'seller.register.field.price': '希望価格（USD）*',
        'seller.register.field.documents': '利用可能な文書',
        'seller.register.field.serial': 'シリアル番号/日付コード',
        'seller.register.field.purchase': 'どこで購入しましたか？',
        'seller.register.field.name': '氏名 *',
        'seller.register.field.email': 'メール *',
        'seller.register.field.phone': '電話番号 *',
        'seller.register.field.contact': '希望連絡方法 *',
        'seller.register.hint.description': '素材、金具、サイズ、その他の特徴に関する詳細を含める',
        'seller.register.hint.price': '当社チームがレビューし、市場価値に基づいて調整を提案する場合があります',
        'seller.register.doc.receipt': 'オリジナルレシート',
        'seller.register.doc.certificate': '真正性証明書',
        'seller.register.doc.box': 'オリジナルボックス/パッケージ',
        'seller.register.doc.dustbag': 'ダストバッグ',
        'seller.register.doc.warranty': '保証書',
        'seller.register.terms.ownership': 'この商品の正当な所有者であることを確認します',
        'seller.register.terms.authentic': '私の知る限り、この商品は本物であることを確認します',
        'seller.register.terms.agreement': 'SERIAEの委託条件と手数料体系に同意します',
        'seller.register.submit': 'レビューに提出',

        // Collections
        'collections.title': 'ラグジュアリーコレクション',
        'collections.subtitle': '認証済み中古ラグジュアリー品',
        'collections.filter.category': 'カテゴリ',
        'collections.filter.status': 'ステータス',
        'collections.filter.sort': '並び替え',
        'collections.category.all': '全カテゴリ',
        'collections.category.handbags': 'ハンドバッグ',
        'collections.category.timepieces': '時計',
        'collections.status.all': '全商品',
        'collections.status.available': '利用可能',
        'collections.status.auction': 'オークション',
        'collections.status.appointment': '予約制',
        'collections.sort.newest': '新着順',
        'collections.sort.price.asc': '価格：低から高',
        'collections.sort.price.desc': '価格：高から低',
        'collections.sort.brand': 'ブランドA-Z',
        'collections.no.results': 'フィルターに一致する商品がありません',

        // Auctions
        'auctions.stat.active': 'アクティブオークション',
        'auctions.stat.yourbids': 'あなたのアクティブ入札',
        'auctions.stat.endingsoon': '24時間以内に終了',
        'auctions.no.active': '現在アクティブなオークションはありません',
        'auctions.browse.collections': 'コレクション閲覧',
        'auctions.modal.title': '入札する',
        'auctions.form.amount': '入札額（USD）',
        'auctions.form.current': '現在の入札額：',
        'auctions.form.terms': 'オークション利用規約に同意します',
        'auctions.form.submit': '入札する',
        'auctions.current.bid': '現在の入札額',
        'auctions.your.bid': 'あなたの入札額',
        'auctions.place.bid': '入札する',
        'auctions.history.subtitle': '過去および現在の入札を確認',
        'auctions.history.empty': 'まだ入札履歴がありません',

        // Watchlist
        'watchlist.title': 'あなたのウォッチリスト',
        'watchlist.subtitle': '監視中の商品',
        'watchlist.empty.title': 'ウォッチリストは空です',
        'watchlist.empty.subtitle': 'ブラウジングを開始してウォッチリストに商品を追加',
        'watchlist.browse': 'コレクション閲覧',

        // Purchases
        'purchases.title': '購入履歴',
        'purchases.subtitle': 'あなたのコレクション',
        'purchases.empty.title': 'まだ購入がありません',
        'purchases.empty.subtitle': '特別な作品の収集を開始',

        // Accessibility
        'accessibility.skip': 'コンテンツにスキップ',

        // Common
        'common.cancel': 'キャンセル',

        // Coming Soon
        'coming.soon.title': 'このページは構築中です。機能は近日公開予定です。',
        'coming.soon.subtitle': '現在作業中です。お待ちいただきありがとうございます。',
        'coming.soon.back': 'ホームに戻る',

        // Time
        'time.hours': '時間',
        'time.minutes': '分',
        'time.days': '日',
        'time.remaining': '残り',

        // Common
        'common.view.all': 'すべて表示',
        'common.english': 'English',
        'common.japanese': '日本語'
    }
};

// Translation utility functions
const Translation = {
    currentLanguage: 'en',

    // Initialize translation system
    init() {
        // Get saved language or default to English
        this.currentLanguage = localStorage.getItem('seriae-language') || 'en';

        // Set HTML lang attribute
        document.documentElement.setAttribute('lang', this.currentLanguage);

        this.updateLanguageToggle();
        this.translatePage();
    },

    // Get translation for a key
    t(key) {
        return translations[this.currentLanguage][key] || translations.en[key] || key;
    },

    // Switch language
    switchLanguage(lang) {
        if (translations[lang]) {
            // Add loading class for transition effect
            document.body.classList.add('language-changing');

            this.currentLanguage = lang;
            localStorage.setItem('seriae-language', lang);

            // Update HTML lang attribute
            document.documentElement.setAttribute('lang', lang);

            this.updateLanguageToggle();
            this.translatePage();

            // Remove loading class after translation
            setTimeout(() => {
                document.body.classList.remove('language-changing');
            }, 300);

            // Trigger custom event for any additional handling
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));

            console.log(`✨ Language switched to: ${lang === 'ja' ? '日本語' : 'English'}`);
        }
    },

    // Update language toggle display
    updateLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle .dropdown-trigger');
        if (languageToggle) {
            const displayLang = this.currentLanguage === 'en' ? 'EN' : 'JP';
            languageToggle.childNodes[0].textContent = displayLang + ' ';
        }
    },

    // Translate all elements on the page
    translatePage() {
        // Translate elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.t(key);

            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else if (element.innerHTML.includes('<')) {
                // Handle HTML content carefully
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = translation;
                element.innerHTML = tempDiv.innerHTML;
            } else {
                element.textContent = translation;
            }
        });

        // Update document title if present
        const titleElement = document.querySelector('[data-translate-title]');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-translate-title');
            document.title = this.t(titleKey) + ' - SERIAE';
        }

        // Handle special formatting for currency and numbers
        this.updateCurrencyDisplay();
        this.updateTimeDisplay();
    },

    // Update currency display based on language
    updateCurrencyDisplay() {
        const priceElements = document.querySelectorAll('.amount');
        priceElements.forEach(element => {
            const amount = element.textContent.replace(/[^\d,]/g, '');
            if (this.currentLanguage === 'ja') {
                element.textContent = `¥${amount}`;
            } else {
                element.textContent = `$${amount}`;
            }
        });
    },

    // Update time display based on language
    updateTimeDisplay() {
        const timeElements = document.querySelectorAll('.time-remaining');
        timeElements.forEach(element => {
            const text = element.textContent;
            if (text.includes('h remaining')) {
                const hours = text.match(/(\d+)h/);
                if (hours) {
                    if (this.currentLanguage === 'ja') {
                        element.textContent = `${hours[1]}時間残り`;
                    } else {
                        element.textContent = `${hours[1]}h remaining`;
                    }
                }
            }
        });
    }
};

// Export for use in other files
if (typeof window !== 'undefined') {
    window.Translation = Translation;
}