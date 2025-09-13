import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Main Image + Thumbnails */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590605103416-230704277b05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBvdHRlcnl8ZW58MHx8MHx8fDA%3D"
                alt="Handcrafted pottery"
                className="w-full h-auto object-cover"
              />
            </Card>
            <div className="flex gap-4">
              <img src="https://media.istockphoto.com/id/1225591536/photo/close-up-of-indian-potter-making-an-earthen-pot-on-pottery-wheel.jpg?s=2048x2048&w=is&k=20&c=tjmkOnZCq3u3QK3_3NbYmys5cRa94-65mFY0bvVBhu8=" alt="" className="w-20 h-20 object-cover rounded-md" />
              <img src="https://plus.unsplash.com/premium_photo-1661380954234-13d98a83577c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 object-cover rounded-md" />
              <img src="https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 object-cover rounded-md" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-serif mb-2">Handcrafted Pottery</h1>
              <p className="text-xl font-semibold mb-4">$45.00</p>
              <p className="text-gray-700 leading-relaxed">
                This handcrafted pottery piece is meticulously crafted <em>from natural clay</em>,
                featuring an earthy, rustic design with a speckled glaze. Each piece is unique,
                showing subtle variations in color and texture. Perfect for both functional use
                and decorative display, this pottery adds a touch of artisanal charm to any setting.
              </p>
            </div>
            <div className="mt-6">
              <Button size="lg" className="bg-[#6c4225] hover:bg-[#54321b] text-white">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Artisan + Cultural Heritage Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Artisan */}
          <div>
            <h2 className="text-2xl font-serif mb-4">About the Artisan</h2>
            <Card className="overflow-hidden mb-4">
              <img src="https://plus.unsplash.com/premium_photo-1674814950019-b29545fea7a7?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artisan" className="w-full h-64 object-cover" />
            </Card>
            <p className="text-gray-700 leading-relaxed">
              Emma Nguyen is a skilled potter with over <strong>20 years of experience</strong> in the art
              of ceramics. Based in the heart of a small village, she draws inspiration from her
              cultural heritage. Emma&apos;s work is known for its quality, attention to detail, and
              the use of traditional techniques passed down through generations.
            </p>
          </div>

          {/* Cultural Heritage */}
          <div>
            <h2 className="text-2xl font-serif mb-4">Cultural Heritage</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold">Origins</h3>
                <p>
                  This style of pottery originates from a rich tradition of local craftsmanship in{" "}
                  <strong>Southeast Asia</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Traditional Techniques</h3>
                <p>
                  Each piece is handmade using age-old methods, including wheel throwing and natural clay
                  firing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Significance</h3>
                <p>
                  These ceramics symbolize a connection to the earth and are often used in everyday life
                  as well as in cultural rituals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
