import { CreditCard, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Logo } from './icons'
import { getTotalProducts, getTotalRestock, getTotalRevenue, getTotalSales } from '@/lib/actions'

export default async function Dashboard() {
  console.log(await getTotalProducts())
  return (
    <main className="w-full h-auto ">
      <Logo />
      <section className="w-full h-auto grid grid-cols-2 gap-7 md:grid-cols-4">
        <Card className="bg-transparent text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Ksh {await getTotalRevenue()}</div>
            <p className="text-xs text-muted-foreground">+54% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Restock</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Ksh {await getTotalRestock()}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resale</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Ksh {await getTotalSales()}</div>
            <p className="text-xs text-muted-foreground">+40.8% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-transparent text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{await getTotalProducts()}</div>
            <p className="text-xs text-muted-foreground">+7.1% from last month</p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
