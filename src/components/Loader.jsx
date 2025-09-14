import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-white font-medium">{progress.toFixed(0)}%</p>
      </div>
    </Html>
  )
}

export default Loader
