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
    Text
  } from "@chakra-ui/react";

const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    
    const fetchData = async () => {
        let userOrders = await axios.get("https://alok-verma-rct.onrender.com/orders")
        let users = await axios.get("https://alok-verma-rct.onrender.com/userlogin")
        userOrders = userOrders.data;
        users = users.data;

        for(let i=0; i<users.length; i++){
            for(let j=0; j<userOrders.length; j++){
                if(users[i].id == userOrders[j].userId){
                    userOrders[j].firstname = users[i].firstname
                    userOrders[j].lastname = users[i].lastname
                }
            }
        }
        setOrders(userOrders)
    }

    const changeStatus = async (id,status) =>{
      if(status=="Success"){
        status="Pending"
      }else{
        status="Success"
      }

      await axios.patch(`https://alok-verma-rct.onrender.com/orders/${id}`,{
          delivery:status
      }).then((res)=>fetchData())
      .catch((err)=>console.log(err))
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
        <div style={{height:"56vh"}}>
            <TableContainer p="20px">
                <Table variant={"simple"}>
                  <Thead>
                    <Tr>
                      <Th>Users</Th>
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
                            <Td>{item.firstname}{" "}{item.lastname}</Td>
                            <Td>{item.date}</Td>
                            <Td>{item.time}</Td>
                            <Td w="40px">{item.title.substring(0, 50)}....</Td>
                            <Td>{item.price}</Td>
                            <Td fontSize={"20px"}>
                              {item.quantity}
                            </Td>
                            <Td>{item.price * item.quantity}</Td>
                            <Td>{item.payment == "Success" ? <Text style={{textAlign:"center", borderRadius:"3px", color:"white", background:"green"}}>Success</Text> : <Text style={{textAlign:"center", borderRadius:"3px", background:"Yellow"}}>Pending</Text>}</Td>
                            <Td _hover={{cursor:"pointer"}} onClick={()=>changeStatus(item.id,item.delivery)}>{item.delivery == "Success" ? <Text style={{textAlign:"center", borderRadius:"3px", color:"white", background:"green"}}>Success</Text> : <Text style={{textAlign:"center", borderRadius:"3px", background:"Yellow"}}>Pending</Text>}</Td>
                            <Td _hover={{cursor:"pointer"}} onClick={()=>deleteOrder(item.id)} style={{background:"red", color:"white", fontWeight:"bold"}}>Delete</Td>
                          </Tr>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
        </div>
    )
}

export default Orders;