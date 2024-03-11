## Dark Mode Feature Using NextJs, Tailwindcss, Next Themes

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![](https://github.com/James-kamwendo/dark-mode/blob/main/Dark%20mode%20feature%20.png)

It will be a lie to say everyone likes bright staff, abit dim or darkness is convenient for others who are trying to use your system. here is how you can add dark/light mode or theme in [Next Js]. The set up is simple, follow through the steps below.

## Getting Started

First, to run the project after cloning, do the following:

```bash
#install dependencies
npm i

#spin the development server

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you can see the following screen, you made it! congrats 🎉



[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Dark Mode Feature in NextJs with Tailwindsss

[x] initialize your project (npx create-next-app) and choose to add tailwindcss to avoid adding it manually
[x] in your tailwind.config.ts file, inside the module.exports add [`darkMode: 'class',`]
[x] in your globals.css make sure you have these three tailwind class: 
    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;

[x] Once you're done with that, its time to install the next-themes package by running [`npm i next-themes`] in the root folder of your project.
[x] Next, wrap your [`<Component {...pageProps} />`] with [`<ThemeProvider>`] from next-themes you just installed inside the [_app.tsx] if using TypeScript like me, if not then in [_app.js]

It should look something like this:

```bash
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

Notice that I enableSystem to true saying that by default the theme to be activated once the application get loaded is system's theme. Also attribute i set it to class just like the darkMode: class we set in the config file for tailwind. This is the simple way for adding dark mode theme.

[x] I installed react-icons package as well for icons.
