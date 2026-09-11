# ScholarAI - ফ্রি ওয়েব হোস্টিং গাইড
# Vercel + Turso (সম্পূর্ণ ফ্রি!)

## 🎯 মোট খরচ: ০ টাকা (সম্পূর্ণ ফ্রি!)

| সার্ভিস | ফ্রি টায়ার | কাজ |
|---------|------------|-----|
| **Vercel** | 100GB ব্যান্ডউইথ/মাস, আনলিমিটেড সাইট | ওয়েব হোস্টিং |
| **Turso** | 9GB স্টোরেজ, 1 বিলিয়ন রিড/মাস | ক্লাউড ডেটাবেস |
| **GitHub** | আনলিমিটেড রেপো | কোড স্টোরেজ |

---

## 📋 ধাপ ১: GitHub অ্যাকাউন্ট ও রেপো তৈরি

1. https://github.com এ যান → Sign Up করুন (ইমেইল দিয়ে)
2. লগইন করে "New Repository" এ ক্লিক করুন
3. রেপোজিটরি নাম দিন: `scholarai`
4. Public সিলেক্ট করুন → "Create Repository" ক্লিক

---

## 📋 ধাপ ২: কোড GitHub-এ আপলোড

আপনার কম্পিউটারে এই কমান্ডগুলো রান করুন:

```bash
# প্রজেক্ট ফোল্ডারে যান
cd /home/z/my-project

# Git ইনিশিয়ালাইজ
git init
git add .
git commit -m "ScholarAI - Initial commit"

# GitHub-এ পুশ
git remote add origin https://github.com/YOUR_USERNAME/scholarai.git
git branch -M main
git push -u origin main
```

⚠️ গুরুত্বপূর্ণ: `.gitignore` ফাইলে নিশ্চিত করুন এগুলো আছে:
```
node_modules/
.next/
.env
*.db
```

---

## 📋 ধাপ ৩: Turso ডেটাবেস সেটআপ (ফ্রি)

1. https://turso.tech এ যান → "Start for Free" ক্লিক
2. GitHub অ্যাকাউন্ট দিয়ে সাইন ইন করুন
3. ড্যাশবোর্ডে "Create Database" ক্লিক করুন
4. ডেটাবেস নাম: `scholarai-db`
5. লোকেশন: নিকটতম সার্ভার সিলেক্ট করুন
6. "Create" ক্লিক করুন

### Turso কানেকশন ডিটেইলস পান:
```bash
# Turso CLI ইনস্টল
curl -sSfL https://get.tur.so/install.sh | bash

# লগইন
turso auth login

# ডেটাবেস URL পান
turso db show scholarai-db --url
# আউটপুট: libsql://scholarai-db-XXXX.turso.io

# Auth Token তৈরি করুন
turso db tokens create scholarai-db
# আউটপুট: eyJhbGciOiJF...
```

এই দুটো ভ্যালু সেভ করুন - পরে লাগবে!

---

## 📋 ধাপ ৪: Vercel ডিপ্লয়মেন্ট (ফ্রি)

1. https://vercel.com এ যান → "Sign Up"
2. "Continue with GitHub" দিয়ে সাইন আপ করুন
3. ড্যাশবোর্ডে "Add New" → "Project" ক্লিক
4. আপনার `scholarai` রেপো সিলেক্ট করুন → "Import"
5. Framework Preset: **Next.js** (অটো ডিটেক্ট হবে)

### Environment Variables সেট করুন:
"Environment Variables" সেকশনে এগুলো যোগ করুন:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | `libsql://scholarai-db-XXXX.turso.io` |
| `DATABASE_AUTH_TOKEN` | `eyJhbGciOiJF...` (Turso থেকে পাওয়া টোকেন) |

6. "Deploy" ক্লিক করুন! 🎉

Vercel অটোমেটিক বিল্ড ও ডিপ্লয় করবে। ২-৩ মিনিটে আপনার সাইট লাইভ হবে!

---

## 📋 ধাপ ৫: ডেটাবেসে ডেটা সিড করুন

ডিপ্লয়মেন্ট শেষে ডেটাবেসে স্কলারশিপ ডেটা লোড করতে হবে:

```bash
# লোকাল পিসিতে Turso-তে কানেক্ট করে সিড রান
cd /home/z/my-project

# .env ফাইলে Turso কানেকশন সেট করুন
# DATABASE_URL=libsql://scholarai-db-XXXX.turso.io
# DATABASE_AUTH_TOKEN=eyJhbGciOiJF...

# Prisma স্কিমা পুশ
npx prisma db push

# সিড ডেটা লোড
npx tsx prisma/seed.ts
```

---

## 🌐 আপনার লাইভ সাইট

ডিপ্লয়মেন্ট শেষে আপনি পাবেন:
- **URL**: `https://scholarai-xxxx.vercel.app`
- **কাস্টম ডোমেইন**: Vercel সেটিংসে আপনার নিজস্ব ডোমেইন যোগ করতে পারবেন

---

## 🔄 আপডেট করতে চাইলে

কোড পরিবর্তন করে GitHub-এ পুশ করলেই Vercel অটো-ডিপ্লয় করবে:
```bash
git add .
git commit -m "Update scholarships"
git push
```

---

## ⚡ বিকল্প: এক কমান্ডে ডিপ্লয় (Vercel CLI)

```bash
# Vercel CLI ইনস্টল
npm i -g vercel

# লগইন
vercel login

# ডিপ্লয়
cd /home/z/my-project
vercel

# প্রোডাকশন ডিপ্লয়
vercel --prod
```

---

## 🆘 সমস্যা সমাধান

| সমস্যা | সমাধান |
|--------|--------|
| Build Failed | Vercel ড্যাশবোর্ডে Build Logs চেক করুন |
| Database Error | .env এ DATABASE_URL ও AUTH_TOKEN সঠিক আছে কিনা চেক করুন |
| 404 Error | next.config.ts এ `serverExternalPackages: ["@libsql/client"]` আছে কিনা দেখুন |
| Cold Start Slow | Vercel Serverless Functions প্রথম রিকোয়েস্টে একটু সময় নেয় - স্বাভাবিক |

---

## 📱 মোবাইল থেকে সাইট দেখুন

আপনার Vercel URL মোবাইল ব্রাউজারে ওপেন করুন - ScholarAI সম্পূর্ণ রেসপন্সিভ!
