import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-gradient-to-r from-primary to-secondary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = "Progress"

export { Progress }




// "use client" // MUST be the first line

// import * as React from "react"
// import * as ProgressPrimitive from "@radix-ui/react-progress"
// import { cn } from "@/lib/utils"

// const Progress = React.forwardRef<
//   React.ElementRef<typeof ProgressPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { value?: number }
// >(({ className, value = 0, ...props }, ref) => (
//   <ProgressPrimitive.Root
//     ref={ref}
//     className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)}
//     value={value}
//     {...props}
//   >
//     <ProgressPrimitive.Indicator
//       className="h-full w-full bg-gradient-to-r from-primary to-secondary transition-all"
//       style={{ transform: `translateX(-${100 - value}%)` }}
//     />
//   </ProgressPrimitive.Root>
// ))

// Progress.displayName = "Progress" // ✅ Assign your own string

// export { Progress }


