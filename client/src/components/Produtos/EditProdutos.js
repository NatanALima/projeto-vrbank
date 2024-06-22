import { useState } from "react";
import InfoExtra from "../InfosExtra/InfoExtra";
import TableProds from "../TableInfo/TableProds";
import { useOutletContext } from "react-router-dom";

export default function EditProdutos() {
    const {styles, infoBoxExtra} = useOutletContext();

    const [produtos, setProdutos] = useState([{
        "cliente": {
          "nome": "Jorge",
          "categoria": "Outro",
          "sala": "Opa"
        },
        "_id": "665f72eaa5d59c8c6bd8980d",
        "registered_by": {
          "_id": "6658ee573ea13ef40b89ddcb",
          "userName": "ADMIN@ADMIN999",
          "password": "$2b$10$zr/LbOa6CIZqzzEX50A9L.VkO8Ks33Ve6I7WKcjVVUHXDjU6IPYT2",
          "createdAt": "2024-05-30T21:23:17.757Z",
          "__v": 0
        },
        "produtos": [
          {
            "nome": "Produto3",
            "qtd": 6,
            "valor": 10,
            "subtotal": 60,
            "_id": "665f9b0313ff94e092f295d8"
          },
          {
            "nome": "Produto4",
            "qtd": 8,
            "valor": 8,
            "subtotal": 64,
            "_id": "665f9b0313ff94e092f295d9"
          }
        ],
        "total": 124,
        "status_pagamento": "PAGO",
        "data_aquisicao": "2024-06-04T19:50:33.677Z",
        "__v": 0,
        "data_edicao": "2024-06-04T22:53:55.923Z"
      },{
        "cliente": {
          "nome": "Jorge",
          "categoria": "Outro",
          "sala": "Opa"
        },
        "_id": "asdf",
        "registered_by": {
          "_id": "asdf34",
          "userName": "ADMIN@ADMIN999",
          "password": "$2b$10$zr/LbOa6CIZqzzEX50A9L.VkO8Ks33Ve6I7WKcjVVUHXDjU6IPYT2",
          "createdAt": "2024-05-30T21:23:17.757Z",
          "__v": 0
        },
        "produtos": [
          {
            "nome": "Produto3",
            "qtd": 6,
            "valor": 10,
            "subtotal": 60,
            "_id": "1234"
          },
          {
            "nome": "Produto4",
            "qtd": 8,
            "valor": 8,
            "subtotal": 64,
            "_id": "12345"
          }
        ],
        "total": 124,
        "status_pagamento": "NÃO PAGO",
        "data_aquisicao": "2024-06-04T19:50:33.677Z",
        "__v": 0,
        "data_edicao": "2024-06-04T22:53:55.923Z"
      }])

    
    const fieldNameTable = ["Nome do Produto", "Quantidade", "Valor", "Subtotal"];

    return (
        <>
            <h1>Edição de Produtos</h1>
            <InfoExtra infoBoxExtra={infoBoxExtra}/>
            {produtos.map((data) => <TableProds dataInfo={data} fieldName={fieldNameTable} key={data._id}/>)}
            
        </>
    )
}