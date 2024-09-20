import './Appointment.css'
import logo from '../../src/assets/logo.png'
import menu from '../../src/assets/menu.png'
import styled from 'styled-components'
import { Button, Calendar, Form, Input, Layout, Modal, Radio, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { Option } from 'antd/es/mentions'
import { useState } from 'react'
const { Header, Sider, Content } = Layout;
function Appointment() {
    const { TextArea } = Input;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onFinish = (values) => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
                <nav className="navbar_Form">
                    <div className='d-flex justify-content-around col-lg-5 flex-sm-row-reverse flex-xl-row'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <img src={logo} alt='Logo Mismatch' id='logo_img' className=' mx-1'></img>
                            <h3 className='fs-4 px-3 mt-2 text-primary'>Mindly</h3>
                        </div>
                        <div className='d-flex justify-content-between align-items-center '>
                            <div className='menu_logo px-3'>
                                <img src={menu}></img>
                            </div>
                            <div className='search_main px-3'>
                                <input type='search' name='search' id='search' placeholder='Search here' className='px-4  d-none d-lg-flex'></input>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end col-lg-5 d-none d-lg-flex'>
                        <div className='p-4'><img src={logo} alt='Logo Mismatch' id='logo_img'></img></div>
                        <div className='p-4'><img src={logo} alt='Logo Mismatch' id='logo_img'></img></div>
                        <div className='p-4'><img src={logo} alt='Logo Mismatch' id='logo_img'></img></div>
                    </div>
                </nav>
                {/* </Design> */}

                <Layout style={{ height: "100%", background: "#f5f4f4" }}>
                    <div style={{ width: "200px" }} className=' d-none d-lg-none d-xl-block'>
                        <Sider style={{ borderRadius: "0 30px 0 0", background: "#ffffff", margin: "30px 0px", lineHeight: "50px", position: "fixed", height: "100%" }}>
                            <div className="dashboard d-flex justify-content-evenly w-75 pt-5">
                                <img src={logo} />
                                <h4 className='fs-6'>Dashboard</h4>
                            </div>
                            <div className='appoint d-flex justify-content-evenly w-75 pt-4 m-2' >
                                <img src={logo} />
                                <h4 className='fs-6'>Appointment</h4>

                            </div>
                        </Sider>
                    </div>
                    <Layout style={{ padding: "20px 0" }}>
                        <Header
                            style={{
                                margin: '0 30px',
                                padding: 0,
                                background: "transparent",
                            }}
                        >
                            <div>
                                <h4 className='fs-6 m-3 ' style={{ color: "#2c37aa" }}>Appointment &gt;
                                    <span style={{ color: "#9ba9d0" }}> Add Appointment</span></h4>
                            </div>
                        </Header>
                        <Content className='contents'
                            style={{
                                margin: '0 35px',
                                padding: "30px 0px 60px 0",
                                minHeight: 300,
                                background: "#ffffff",
                                borderRadius: "10px",
                            }}
                        >
                            <div>
                                <h2 className='fs-6 p-3'>Patient Details</h2>
                                <Content className='d-flex flex-wrap justify-content-between w-100 main_con ' >
                                    <Form
                                        requiredMark={false}
                                        layout="vertical"
                                        name="appointmentForm"
                                        className="px-4 col-lg-4 col-md-8 col-sm-12"
                                        onFinish={onFinish} >
                                        <Form.Item label="Select Doctor" layout="horizontal" >
                                            <Select className='input_select' placeholder="Select a Doctor"  >
                                                <Option value="Dr. Santy San">Dr. Santy San</Option>
                                                <Option value="Dr. Prasad Jayakumar">Dr. Prasad Jayakumar</Option>
                                                <Option value="Dr. Bharani">Dr. Bharani</Option>
                                            </Select>
                                        </Form.Item>
                                        <FormItem
                                            name="firstName"
                                            rules={[{ required: true, message: 'First name is required' }]}>
                                            <div>
                                                <label ><span className="types">First Name <span className='text-danger'> *</span></span></label>
                                                <Input className='input_box' type='text' />
                                            </div>
                                        </FormItem>
                                        <FormItem >
                                            <label><span className="types">Middle Name </span></label>
                                            <Input className='input_box' type='text' />
                                        </FormItem>
                                        <FormItem name="lastName"
                                            rules={[{ required: true, message: 'Last name is required' }]} >
                                            <div>
                                                <label><span className="types">Last Name <span className='text-danger'> *</span></span></label>
                                                <Input className='input_box' type='text' />
                                            </div>
                                        </FormItem>
                                        <Form.Item
                                            label={<span className='fw'>Gender <span className='text-danger' >*</span></span>}
                                            name="gender"
                                            rules={[{ required: true, message: 'Gender is required' }]}
                                        >
                                            <Radio.Group>
                                                <Radio value="male">Male</Radio>
                                                <Radio value="female">Female</Radio>
                                                <Radio value="others">Others</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        <FormItem name="mobilenumber"
                                            rules={[{ required: true, message: 'Mobile Number is required' }]} >
                                            <div>
                                                <label><span className="types">Mobile Number <span className='text-danger' >*</span></span></label>
                                                <Input className='input_box' type='number' />
                                            </div>
                                        </FormItem>
                                        <FormItem name="email"
                                            rules={[{ required: true, message: 'Email is required' }]} >
                                            <div>
                                                <label><span className="types">Email <span className='text-danger' >*</span></span></label>
                                                <Input className='input_box' type='email' />
                                            </div>
                                        </FormItem>
                                        <Form.Item name="address"
                                            rules={[{ required: true, message: 'Address is required' }]}
                                        >
                                            <div>
                                                <label><span className="types">Address <span className='text-danger' >*</span></span></label>
                                                <TextArea rows={3} className='input_text' />
                                            </div>
                                        </Form.Item>
                                        <Form.Item name="notes"
                                            rules={[{ required: true, message: 'Notes is required' }]}
                                        >
                                            <div>
                                                <label><span className="types">Notes <span className='text-danger' >*</span></span></label>
                                                <TextArea rows={3} className='input_text' />
                                            </div>
                                        </Form.Item>
                                        <div className='d-flex justify-content-end buttons'>
                                            <Form.Item >
                                                <Button type="primary" htmlType="submit" className='mx-3 fs-6 p-3 '>
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                            <Form.Item >
                                                <Button danger htmlType="reset" className='mx-3 fs-6 p-3 '>
                                                    Reset
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    </Form>
                                    <Calendar className="shadow px-5 col-lg-8 col-md-8 col-sm-12 " ></Calendar>
                                </Content>
                            </div>
                            <hr />
                        </Content>
                    </Layout>
                </Layout>
                <Modal
                    title="Form Submitted"
                    open={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Your form has been submitted successfully!</p>
                </Modal>
        </div>
    )
}

export default Appointment
