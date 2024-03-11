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

![](https://github.com/James-kamwendo/dark-mode/blob/main/DarkMode.gif)

## Adding Dark/Light Mode feature In Your Project


1. Initialize your project [`npx create-next-app`] and choose to add tailwindcss to avoid adding it manually
2. In your tailwind.config.ts file, inside the module.exports add [`darkMode: 'class',`]
3. In your globals.css make sure you have these three tailwind classes: 
    
   - @tailwind base;
   - @tailwind components;
   - @tailwind utilities;

4. Once everything looks in order, its time to install the next-themes package by running
```bash
npm i next-themes
```
 in the root folder of your project.
 
5. Next, wrap your [`<Component {...pageProps} />`] with [`<ThemeProvider>`] from next-themes you just installed inside the [_app.tsx] if using TypeScript like me, if not then in [_app.js]

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

Notice that [`enableSystem`] is set to true saying that by default the theme to be activated once the application gets loaded is system's default theme i.e Light or Dark Mode. Also [`attribute`] is set to [`class`] just like the darkMode: class we set in the config file for tailwind.

6. [Optional] I installed react-icons package as well for icons.

That's all, please feel free to tell what you think of this approach. also I would feel encouraged if you could give it a star 😉✨ but nonetheless your support, contributions and feedback are welcome!

## Would you like to connect?
- Find me on LinkedIn [James Kamwendo](https://linkedin.com/james-kamwendo) or email [me](jameskamwendo226@gmail.com)
- You can also follow me on GitHub [](https://github.com/James-kamwendo)
