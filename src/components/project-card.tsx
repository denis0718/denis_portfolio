import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Row from './row.tsx'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  githubURL: string;
  projectURL: string;
}

export function ProjectCard({ img, title, desc, githubURL, projectURL }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2">
            {title}
          </h5>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {desc}
        </Typography>
        <Row classNames="w-full items-center justify-center mt-4 gap-2">
          {githubURL ? (
            <Link
              href={githubURL}
              aria-label={`${title} GitHub URL`}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-base/6 text-[var(--textColor)]"
              />
            </Link>
          ) : null}

          {projectURL ? (
            <Link
              href={projectURL}
              aria-label={`${title} Project URL`}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
            >
              <FontAwesomeIcon
                icon={faEye}
                className="text-base/6 text-[var(--textColor)]"
              />
            </Link>
          ) : null}
        </Row>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
