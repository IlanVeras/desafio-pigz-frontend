import React from 'react'
import NavBar from '../../components/NavBar'
import Square from '../../components/Square';
import styles from '../Home/Home.module.css'
import Vendas from '../../components/Vendas';

const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Home() {
  return (
    <div>
        <header>
            <NavBar/>
        </header>

        <main className={styles.mainDiv}>
            {/* {
                itens.map((item) => (
                    <Square/>
                ))
            } */}
            <Vendas/>
        </main>

        <footer>

        </footer>
    </div>
  )
}
