import React from 'react';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import { MdFileUpload } from 'react-icons/md';
import { Chip } from '../chip';

import { Text } from '../typography/Typography';

export type DropzoneProps = {
  files: File[];
  message?: string;
  multiple?: boolean;
  onDrop: (acceptedFiles: File[]) => void;
  onRemove: (file: File) => (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Dropzone: React.FC<DropzoneProps> = ({
  files,
  onDrop,
  onRemove,
  message = 'ここにファイルをドロップしてアップロード',
  multiple = false,
}) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple });

  return (
    <div
      {...getRootProps()}
      className={clsx([
        'flex w-auto cursor-pointer flex-col flex-wrap justify-center py-3 px-5',
        'border-shade-medium-default rounded border border-dashed',
      ])}
    >
      <input {...getInputProps()} />

      <div className="text-shade-medium-default flex w-full flex-col items-center py-5 px-3">
        <MdFileUpload size={48} className="text-shade-light-default mb-3" />
        <Text variant="caption">{message}</Text>
      </div>

      {files.length > 0 && (
        <div className="flex w-full flex-wrap justify-start gap-2">
          {files.map((file) => (
            <Chip key={file.name} label={file.name} onDelete={(e) => onRemove(file)(e)} />
          ))}
        </div>
      )}
    </div>
  );
};
