'use client'
import { Breadcrumbs } from "@/components"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BreadcrumbsExampleComponent() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Electronics', href: '/electronics' },
    { label: 'Computers', href: '/electronics/computers' },
    { label: 'Laptops', href: '/electronics/computers/laptops' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        
        <Card>
          <CardHeader>
            <CardTitle>Laptops</CardTitle>
            <CardDescription>Browse our selection of high-performance laptops</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Here you'll find a wide range of laptops, from budget-friendly options to high-end gaming machines. 
              Our selection includes popular brands like Dell, HP, Lenovo, and Apple. Whether you're a student, 
              professional, or casual user, we have the perfect laptop to suit your needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}