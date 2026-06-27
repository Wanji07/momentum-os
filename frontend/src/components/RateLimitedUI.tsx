import { OctagonMinus } from 'lucide-react'

const RateLimitedUI = () => {
  return (
    <div className="container px-4 py-8">
        <div className="max-w-2xl mx-auto">
            <div className="card bg-base-200 card-xl">
                <div className="card-body grid grid-cols-[1fr_4fr]">
                    <OctagonMinus 
                    size={50}
                    className="m-auto ml-5"
                    />
                    <div className="flex flex-col justify-between">
                        <h1 className="font-bold tracking-wide">Rate Limited Reached</h1>
                        <p className="text-base-content mb-1">You've made too many requests in a short period. Please wait a moment.</p>
                        <p className="text-sm text-base-content/70">Try again in a few seconds for the best experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RateLimitedUI