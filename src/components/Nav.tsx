import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

type NavProps = {
  isLibraryActive: boolean;
  setIsLibraryActive: Dispatch<SetStateAction<boolean>>;
};

export default function Nav({ isLibraryActive, setIsLibraryActive }: NavProps) {
  return (
    <div className="nav-container">
      <h1>Waves</h1>
      <button
        onClick={() => {
          setIsLibraryActive(!isLibraryActive);
        }}
      >
        <span>Library</span>
        <FontAwesomeIcon icon={faMusic} size={"2x"} />
      </button>
    </div>
  );
}
