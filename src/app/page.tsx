'use client';

import Link from 'next/link';
import Image from 'next/image';

import { getAccessToken } from '@/lib/auth-token-storage';
import { PwaInstallManager } from '@/components/pwa-install-manager';

const features = [
  ['Quản lý tập trung', 'Theo dõi người dùng, phiên đăng nhập và dữ liệu vận hành tại một nơi.'],
  ['Nhanh và rõ ràng', 'Giao diện gọn gàng giúp đội ngũ xử lý công việc nhanh hơn.'],
  ['Sẵn sàng mở rộng', 'Nền tảng hiện đại để phát triển thêm các tính năng cho Mimkat.'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 lg:px-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Mimkat"
              width={42}
              height={42}
              className="rounded-xl"
            />
            <span className="text-lg font-semibold tracking-tight">Mimkat Admin</span>
          </Link>
          {!getAccessToken() && (
            <Link
              href="/login"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-white/50 hover:bg-white/10"
            >
              Đăng nhập
            </Link>
          )}
        </header>

        <section className="flex flex-1 items-center py-10">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-cyan-300 uppercase">
              Quản trị đơn giản hơn
            </p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Vận hành Mimkat
              <span className="block text-cyan-300">một cách nhẹ nhàng.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Mimkat Admin giúp bạn quản lý người dùng và hoạt động hệ thống trong một không gian rõ
              ràng, nhanh chóng và dễ sử dụng.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              {!getAccessToken() ? (
                <Link
                  href="/login"
                  className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Bắt đầu ngay
                </Link>
              ) : (
                <Link
                  href="/default"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-white/50 hover:bg-white/10"
                >
                  Xem dashboard
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-3">
          {features.map(([title, description]) => (
            <article key={title} className="rounded-2xl bg-white/5 p-5">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </section>
      </div>
      <PwaInstallManager />
    </main>
  );
}
