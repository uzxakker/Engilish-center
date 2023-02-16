import React from "react";
import { WrapperWatch, Wrapper } from "./styled-index";
import { WrapperContainer } from "../../App-styled";
import SimpleZoom from "./modal";
import VideoModa from "./modal";
import { useTranslation } from "react-i18next";

function Watch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t, i18n } = useTranslation();

  return (
    <WrapperWatch>
      <WrapperContainer>
        <Wrapper>
          <div className="texts">
            <p data-aos="fade-right" data-aos-duration="700">
              {t("Watch.0")}
            </p>
            <button
              data-aos="fade-right"
              data-aos-duration="700"
              onClick={handleOpen}
            >
              Watch Video
            </button>
          </div>
          <img
            className="tv-img"
            data-aos="fade-left"
            data-aos-duration="700"
            src="https://thumb.tildacdn.com/tild3462-3632-4461-b964-636338396239/-/format/webp/TV.png"
            alt="photo"
          />
          <VideoModa open={open} setOpen={setOpen} handleClose={handleClose} />
        </Wrapper>
      </WrapperContainer>
    </WrapperWatch>
  );
}

export default Watch;
