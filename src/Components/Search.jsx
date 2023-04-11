import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Search () {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((store) => store.search)
    console.log(products, loading, error)
    return (
        <div>
            {
            loading ? (
            <div style={{ textAlign: "center", height:"56vh", display:"flex", alignItems:"center" }}>
                <Spinner
                 thickness="4px"
                 speed="0.65s"
                 emptyColor="gray.200"
                 color="blue.500"
                 size="xl" 
                 margin={"auto"}
                />
            </div> 
            ) : error ? (
            <div style={{ textAlign: "center", height:"56vh",  display:"flex", alignItems:"center" }}>
                <Heading
                  margin={"auto"}
                >
                    "Something Went Wrong"
                </Heading>
            </div>
            ) : (
                products.length!==0 ? (
                    <SimpleGrid margin={"auto"} width={"fit-content"} columns={[1,2,2,4,4,4]}>
                        {
                                products?.map((e)=>{
                                    return(
                                        <ProductCard key={e.id} {...e}/>
                                    )
                                })
                        }
                    </SimpleGrid>
                ) : (
                    <div style={{ textAlign: "center", height:"56vh",  display:"flex", alignItems:"center" }}>
                        <Heading
                            margin={"auto"}
                        >
                            "No Results Found"
                        </Heading>
                    </div>
                )
            )
            }
        </div>
    )
}

export default Search;