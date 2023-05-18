import React from 'react';

interface AvatarProps {
	url: string;
}

export const Avatar: React.FC<AvatarProps> = ({url}) => (
	<img src={url ?? 'https://placehold.co/400x400'} alt="avatar" className="w-10 h-10 rounded-full" />
);
