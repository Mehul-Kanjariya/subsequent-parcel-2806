import React from "react";
import axios from "axios";
import {
    TableContainer,
    Table,
    Thead,
    Tr,
    Td,
    Th,
    Box,
    Tbody,
    Input,
    Button,
    Text,
    Heading
  } from "@chakra-ui/react";
  import { useSelector } from "react-redux";

const Userorders = () => {
    const { isAuth, name, userId } = useSelector((store) => store.auth);
    const [orders, setOrders] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    console.log(userId,orders)
    const fetchData = async () => {
        let userOrders = await axios.get("https://alok-verma-rct.onrender.com/orders")
        userOrders = userOrders.data;

        setOrders(userOrders.filter((e)=>e.userId == userId))
    }

    const deleteOrder = async (id) =>{

      await axios.delete(`https://alok-verma-rct.onrender.com/orders/${id}`)
      .then((res)=>fetchData())
      .catch((err)=>console.log(err))
    }

    React.useEffect(()=>{
        fetchData();
    },[])
    return (
        <div>
            {orders.length == 0 ? 
              <div style={{ textAlign: "center", height:"56vh",  display:"flex", alignItems:"center" }}>
              <Heading
                  margin={"auto"}
              >
                  "No Orders Found"
              </Heading>
          </div> :
            <div style={{height:"56vh"}}>
            <Heading>{name} Your Orders</Heading>
            <TableContainer p="20px">
                <Table variant={"simple"}>
                  <Thead>
                    <Tr>
                      <Th>Date</Th>
                      <Th>Time</Th>
                      <Th>Item Details</Th>
                      <Th>Price</Th>
                      <Th>Quantity</Th>
                      <Th>Subtotal</Th>
                      <Th>Payment</Th>
                      <Th>Delivery</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {orders?.map((item) => {
                      return (
                        <>
                          <Tr key={item.id}>
                            <Td>{item.date}</Td>
                            <Td>{item.time}</Td>
                            <Td w="40px">{item.title.substring(0, 50)}....</Td>
                            <Td>{item.price}</Td>
                            <Td fontSize={"20px"}>
                              {item.quantity}
                            </Td>
                            <Td>{item.price * item.quantity}</Td>
                            <Td>{item.payment == "Success" ? <Text style={{textAlign:"center", borderRadius:"3px", color:"white", background:"green"}}>Success</Text> : <Text style={{textAlign:"center", borderRadius:"3px", background:"Yellow"}}>Pending</Text>}</Td>
                            <Td>{item.delivery == "Success" ? <Text style={{textAlign:"center", borderRadius:"3px", color:"white", background:"green"}}>Success</Text> : <Text style={{textAlign:"center", borderRadius:"3px", background:"Yellow"}}>Pending</Text>}</Td>
                            <Td _hover={{cursor:"pointer"}} onClick={()=>deleteOrder(item.id)} style={{background:"red", color:"white", fontWeight:"bold"}}>Delete</Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
              </div>
          }
        </div>
    )
}

export default Userorders;