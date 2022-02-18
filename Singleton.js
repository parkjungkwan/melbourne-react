import React from "react";
import {useRoutes, Link} from "react-router-dom";
import styled from "styled-components";
export default function Singleton(){
    return useRoutes([
      { path: "/", element: <Home /> },
      { path: "1", element: <Component1 /> },
      { path: "2", element: <Component2 /> },
      { path: "3", element: <Component3 /> },
    ]);
  }
const Home = () => (<Layout><h1>즐거운 리액트 코딩시간 *^^* </h1></Layout>)
const Component1 = () =>(<Layout><h1>1</h1></Layout>)
const Component2 = () => (<Layout><h1>2</h1></Layout>)
const Component3 = () => (<Layout><h1>3</h1></Layout>)
const Header = () =>(<h1>Header</h1>)
const Navbar = () => (<div>
    <nav>
    <Ul>
      <Li><Link to={"/"}>Home</Link></Li>
      <Li><Link to="/1">1</Link></Li>
      <Li><Link to="/2">2</Link></Li>
      <Li><Link to="/3">3</Link></Li>
    </Ul>
  </nav>
</div>)

const Ul = styled.ul`
  background-color: #FFDAB9;
  text-decoration: none;
  text-align: center;
`

const Li = styled.li`
  float: left;
  margin-left: 1em;
  font-size: 20px;
  text-align: center;
  display: inline-block
`
const Footer = () => (<h1>Footer</h1>)
const Layout = ({ children }) => (<div>
        <Table>
            <thead>
            <Tr>
                <Th><Header/></Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <Td>
                    <Navbar/>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    {children}
                </Td>
            </Tr>
            <Tr>
                <Td><Footer/></Td>
            </Tr>
            </tbody>
        </Table>
    </div>)

const Table = styled.table`
    border: 1px solid black;
    width: 1000px;
    height: 500px;
    margin: 0 auto;
`
const Tr = styled.tr`
    border: 1px solid black
`
const Th = styled.th`
    border: 1px solid black
`
const Td = styled.td`
    border: 1px solid black
`
