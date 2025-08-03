'use client';

import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert('送信されました！');
      reset();
    } else {
      alert('送信に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">お問い合わせ</h1>
      <input {...register('name')} placeholder="お名前" className="w-full border p-2 mb-2" />
      <input {...register('email')} placeholder="メールアドレス" className="w-full border p-2 mb-2" />
      <textarea {...register('message')} placeholder="メッセージ" className="w-full border p-2 mb-4" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">送信</button>
    </form>
  );
};

export default ContactPage;
