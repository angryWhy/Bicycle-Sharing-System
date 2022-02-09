import React from 'react'
import {Button,Card,Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftjs from 'draftjs-to-html'
export default class RichText extends React.Component{

    state = {
        showRichText:false,
        editorContent: '',
        editorState: '',
    };
    //状态值清空，setState设置为空
    handleClearContent = ()=>{
        this.setState({
            editorState:''
        })
    }
    //设置弹窗
    handleGetText = ()=>{
        this.setState({
            showRichText:true
        })
    }
     //内容的状态
    onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        });
    };
    //编辑器的状态
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    };

    render(){
        const { editorContent, editorState } = this.state;
        return (
            <div>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
                    <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}

                        //内容变化，设置
                        onContentStateChange={this.onEditorChange}

                        //设置值
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={()=>{
                        this.setState({
                            showRichText:false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        );
    }
}