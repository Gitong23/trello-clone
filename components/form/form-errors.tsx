import { XCircle } from "lucide-react"
import { map } from "zod"

interface FormErrorProps{
    id: string
    errors?: Record<string, string[] | undefined>
}

export const FormError = ({
    id,
    errors
} : FormErrorProps) => {
    if(!errors){
        return null
    }

    return (
        <div 
            id={`${id}`}
            aria-live = "polite"
            className="mt-2 text-xs text-rose-500"
        >
            {
                errors?.[id]?.map(
                    (error: string) => (
                        <div
                            key={error}
                            className="flex items-center font-medium p-2 border
                            border-rose-500 bg-rose-500/10 rounded-sm"
                        >
                            <XCircle className="h-4 w-4 mr-2"/>
                            {error}
                        </div>
                    )
                )
            }
        </div>
    )
}