/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Component() {
  const [showTooltip, setShowTooltip] = useState(false)
  const handleBuyNowClick = () => {
    setShowTooltip(true)
    setTimeout(() => {
      setShowTooltip(false)
    }, 2000)
  }
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-4">
      <header className="w-full max-w-4xl py-6 text-center">
        <h1 className="text-4xl font-bold">Ultimate Car Steering Wheel Lock</h1>
        <p className="mt-2 text-lg text-gray-700">Secure your vehicle with our top-rated steering wheel lock.</p>
      </header>
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg"
              alt="Car Steering Wheel Lock"
              className="w-full h-auto rounded-lg"
              width="1152"
              height="768"
              style={{ aspectRatio: "1152/768", objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Features</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>🔒 High-security lock mechanism</li>
                <li>🔧 Easy to install and remove</li>
                <li>🔨 Made from durable materials</li>
                <li>🚗 Fits most car steering wheels</li>
              </ul>
              <h2 className="mt-6 text-2xl font-semibold">Specifications</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Material: Hardened steel</li>
                <li>Weight: 1.5 kg</li>
                <li>Dimensions: 35 cm x 15 cm x 10 cm</li>
                <li>Color: Black</li>
              </ul>
            </div>
            <div className="mt-6">
              <TooltipProvider>
                <h2 className="text-2xl font-semibold">Price: $49.99</h2>
                <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                  <TooltipTrigger>
                    <Button onClick={handleBuyNowClick} className="mt-4 w-full">
                      Buy Now
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming Soon!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Customer 1" />
                <AvatarFallback>C1</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600">Satisfied Customer</p>
              </div>
            </div>
            <p className="text-gray-700">
              "This steering wheel lock is a game-changer! It's easy to use and gives me peace of mind knowing my car is
              secure."
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Customer 2" />
                <AvatarFallback>C2</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Loyal Customer</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I've been using this steering wheel lock for over a year, and it's been a reliable and durable product.
              Highly recommended!"
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Customer 3" />
                <AvatarFallback>C3</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Michael Johnson</h3>
                <p className="text-gray-600">Satisfied Customer</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I was a bit skeptical at first, but this steering wheel lock has exceeded my expectations. It's a
              must-have for any car owner."
            </p>
          </div>
        </div>
      </section>
      <footer className="w-full max-w-4xl py-6 mt-8 text-center text-gray-600">
        &copy; 2023 Car Security Solutions. All rights reserved.
      </footer>
    </div>
  )
}
