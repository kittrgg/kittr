import { download } from '@kittr/firebase/storage';
import { AvatarShineLoader } from '../Loader';
import { User } from '../../icons';
import {
  Avatar as AvatarPrimitive,
  AvatarFallback,
  AvatarImage,
} from './Primitive';

interface AvatarProps {
  id: string;
  hasProfileImg?: boolean;
  username: string;
  isLive?: boolean;
}

export const Avatar = async ({
  id,
  hasProfileImg,
  username,
  isLive,
}: AvatarProps) => {
  return hasProfileImg ? (
    <div className="relative">
      <AvatarPrimitive>
        <AvatarFallback>
          <AvatarShineLoader />
        </AvatarFallback>
        <AvatarImage src={await download(id)} alt={username} />
      </AvatarPrimitive>
      {isLive ? (
        <span className="absolute top-0 z-10 block w-2.5 h-2.5 animate-pulse text-white bg-red-600 rounded-full" />
      ) : null}
    </div>
  ) : (
    <div className="text-gray-500 flex justify-center items-center overflow-hidden border w-[40px] h-[40px] border-gray-500 rounded-full">
      <User strokeWidth={0.75} width={30} height={30} />
    </div>
  );
};
