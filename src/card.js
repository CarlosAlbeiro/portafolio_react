
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-6 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl font-bold">Title Goes Here</h1>
          </div>
          <div>
            <img
              alt="Image"
              className="rounded-lg"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

