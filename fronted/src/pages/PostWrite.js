import React, { useEffect, useRef, useState } from 'react';
import useInput from '../shared/useInput';
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import 'codemirror/lib/codemirror.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import styled from 'styled-components';

import PostWriteHeader from '../components/PostWrite/PostWriteHeader';

const PostWrite = (props) => {

  const {articleId} = useParams();
  const dispatch = useDispatch();
  const detailPost = useSelector((state) => state.post.detailPost);
  const [hashTagList, setHashTagList] = useState([]); //articleId?detailPost.hashTag:[]

  const editorRef = useRef();
  const [title, onChangeTitle] = useInput(articleId && detailPost.title);


  // 글등록
  const submit = () => {
    /* const contents = editorRef.current
      .getInstance()
      .getTextObject()
      .setRange(20); */
    // toast editor 제공 api -
    console.log("post funcs111111");

    const contentsInstance = editorRef.current.getInstance();
    const contentsMd = contentsInstance.getMarkdown();
    const contentsHtml = contentsInstance.getHTML();

    const image = contentsHtml.split('=')[1]?.split('"')[1];

    if (!title || !contentsMd) return;

    const post = {
      title,
      contents: contentsMd.replaceAll('#', ''),
      contentsHtml,
      contentsMd,
      hashTag: hashTagList,
      image
    };

    if (articleId) {
      // write/id가 있으면 수정
       console.log('article post---id');
      dispatch(postActions.updatePost(articleId, post));
    } else {
      console.log('article post');
      // write/id가 없으면 새글 등록
      dispatch(postActions.createPost(post));
    }

  };
  return (
    <React.Fragment>
        <Container>
            <PostWriteHeader
              hashTagList={hashTagList}
              setHashTagList={setHashTagList}
              title={title}
              _onChange={onChangeTitle}
            />

        {/* editor는 토스트 ui사용 */}

        <Editor
          previewStyle="vertical"
          initialEditType="markdown"
          previewHighlight={false}
          placeholder="작성하세요..."
          height="75vh"
          ref={editorRef}
        ></Editor>
             </Container>
              <Footer>
                <Buttons>

                  <button className="submit" onClick={submit}>
                    출간하기
                  </button>
                </Buttons>
              </Footer>

    </React.Fragment>
  );
};

PostWrite.propTypes = {};

const Container = styled.div`
  ${(props) => props.theme.border_box};
  padding: 0 1rem;
  width: 100vw;
`;


const Footer = styled.div`
  ${(props) => props.theme.border_box};
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100vw;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;

      &:hover {
        background-color: rgb(233, 236, 239);
      }
      & span {
        margin-left: 0.5rem;
        font-weight: 450;
      }
    }
  `;

  const Buttons = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    & button {
      cursor: pointer;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2.5rem;
      font-size: 1.125rem;
      font-weight: bold;
      outline: none;
    }
    & button.cancle {
      margin-right: 0.75rem;
      background: rgb(233, 236, 239);
      color: rgb(73, 80, 87);
      &:hover {
        background-color: rgb(233, 236, 239, 0.7);
      }
    }
    & button.submit {
      background-color: #333333;
      &:hover {
        background-color:#10deb8
      }
    }
  `;

export default PostWrite;