import { Inter } from "next/font/google";
import { cn } from '@/lib/utils'
import HomeComp from "../components/home";

const inter = Inter({ subsets: ["latin"] });

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Home() {
  return (
    <div className={cn(
      'antialiased',
      fontHeading.variable,
      fontBody.variable
    )}>
      <HomeComp />
    </div>
  );
}
