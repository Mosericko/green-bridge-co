import React, { useState } from "react";
import { RemixImage } from "../remix-image";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

interface Props {
  name: string;
  image: string;
  description: string;
}

interface OtherSpeakerProps {
  name: string;
  image: string;
  title: string;
}

export default function KeySpeaker({ name, image, description }: Props) {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex flex-col gap-3 overflow-hidden">
        <div className="h-80 w-full overflow-hidden">
          <RemixImage
            src={image}
            layout="fullWidth"
            className="overflow-clip-margin h-full w-full rounded-xl object-cover"
          />
        </div>

        <p className="text-xl font-bold text-black">{name}</p>

        <p className="text-default-600 line-clamp-4 text-sm font-normal">
          {description}
        </p>

        <p
          className="text-primary touch-hitbox cursor-pointer text-sm underline-offset-2 hover:underline"
          onClick={onOpen}
        >
          Learn More
        </p>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        size="2xl"
        classNames={{ backdrop: "z-[95]", wrapper: "z-[100]" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="px-0 py-0">
                <img
                  src={image!}
                  alt="image"
                  className="overflow-clip-margin aspect-video h-96 w-full object-cover object-center"
                />

                <p className="mt-5 px-5 text-sm text-black">{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  size={"sm"}
                  onPress={onClose}
                  className="rounded-md font-semibold"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function OtherSpeaker({ name, image, title }: OtherSpeakerProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-primary/10 h-50 w-full overflow-hidden border">
        <RemixImage
          src={image}
          layout="fullWidth"
          className="overflow-clip-margin h-full w-full rounded-xl object-cover"
        />
      </div>
      <div>
        <p className="text-lg font-bold text-black">{name}</p>

        <p className="text-default-600 line-clamp-2 text-sm font-normal">
          {title}
        </p>
      </div>
    </div>
  );
}
