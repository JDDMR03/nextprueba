import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from 'axios';

const inter = Inter({ subsets: ["latin"] });

axios.get('http://model.uniamigomodel.com/api/users', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQ0NzYxNTcsImlhdCI6MTcyNDM4OTc1Nywic3ViIjoxfQ.Ap2NoE4O6hHGVxnWk5SJzsoKmM-bHdh8gugsJxw_JOQ',
    'Content-Type': 'application/json',
  }
})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

export default function Home() {
  return (
    <>
      <header>
        <h1>Samuel Alejandro</h1>
      </header>
    </>
  );
}
