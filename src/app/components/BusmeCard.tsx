import { FC, } from 'react'
import { IconType } from '@heroicons/react/20/solid';

interface CardProps {
    title: string
    description: string
    Icon: IconType
    imageSrc: string
}

const BusmeCard: FC<CardProps> = ({ title, description, Icon, imageSrc }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden font-poppins bg-white">
            <div className="flex items-center justify-center">
                <Icon className="h-6 w-6 text-complementary-800 mr-2" />
                <h2 className="text-xl font-medium">{title}</h2>
            </div>
            <p className="text-black text-base mb-7 mt-4 text-center">
                {description}
            </p>
            <img src={imageSrc} alt="img" className="h-auto w-auto" />
        </div>
    )
}

export default BusmeCard