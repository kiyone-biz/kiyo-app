import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">ようこそ、ポートフォリオサイトへ</h1>
      <p className="text-lg text-gray-700 mb-6">
        フロントエンドとバックエンドの知識を活かして開発した作品をご紹介しています。
      </p>

      <div className="space-y-4">
        <Link href="/works">
          <div className="block bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-700 transition">
            💼 制作実績を見る
          </div>
        </Link>

        <Link href="/contact">
          <div className="block bg-gray-800 text-white py-3 px-5 rounded hover:bg-gray-900 transition">
            📩 お問い合わせ
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
