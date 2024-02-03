import { useEffect } from "react";

import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";

import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
  height: 75px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  margin-top:16px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 5px;
  width: 80%;
  margin:15px 12px 24px 0;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 17px;
  height: 40px;
  padding-left: 15px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
  cursor: pointer;
`;

const Footer = ({sendText, setValue, value, file, setFile, setImage}) => {

  useEffect(()=>{
    const getImage = async ()=>{
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setImage(response.data);
      }
    }
    getImage();
  },)

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }

  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileinput">
        <ClipIcon />
      </label>
      <input 
        type="file"
        id="fileinput"
        style={{display: 'none'}} 
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField 
          placeholder="Type a message" 
          onChange={(e) => setValue(e.target.value)}
         onKeyUp={(e)=>sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
