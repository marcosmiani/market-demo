import styled from "styled-components";

const IconWrapper = styled.svg`
  transform: rotate(${({ rotate }) => `${rotate || 0}deg`});
  padding: 0 7px;
`;

const CheckMark = ({ width = 24, height = 24, disabled = false, ...props }) => {
  return (
    <IconWrapper
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.06678 12.3328C5.11054 12.4379 5.1718 12.5343 5.25932 12.6131L11.3857 18.7438C11.7271 19.0854 12.2784 19.0854 12.6198 18.7438C12.9611 18.4023 12.9611 17.8505 12.6198 17.5089L7.98995 12.8758L18.1248 12.8758C18.6062 12.8758 19 12.4817 19 12C19 11.5183 18.6062 11.1242 18.1248 11.1242L7.9812 11.1242L12.611 6.49109C12.9523 6.14951 12.9523 5.59775 12.611 5.25618C12.2697 4.91461 11.7183 4.91461 11.377 5.25618L5.25057 11.3869C5.1718 11.4657 5.11054 11.5621 5.05802 11.6672C4.97926 11.8774 4.97926 12.1226 5.06678 12.3328Z"
        fill={disabled ? "#697488" : "#1EA4CE"}
      />
    </IconWrapper>
  );
};

export default CheckMark;
