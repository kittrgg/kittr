import { AvatarShineLoader } from '../Loader';
import { User } from '../../icons';
import {
  Avatar as AvatarPrimitive,
  AvatarFallback,
  AvatarImage,
} from './Primitive';

interface AvatarProps {
  imageSrc: string;
  username: string;
}

export const Avatar = ({ imageSrc, username }: AvatarProps) => {
  return imageSrc ? (
    <AvatarPrimitive>
      <AvatarFallback>
        <AvatarShineLoader />
      </AvatarFallback>
      <AvatarImage src={imageSrc} alt={username} />
    </AvatarPrimitive>
  ) : (
    <div className="text-gray-500 flex justify-center items-center overflow-hidden border w-[40px] h-[40px] border-gray-500 rounded-full">
      <User strokeWidth={0.75} width={30} height={30} />
    </div>
  );
};
