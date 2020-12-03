import * as React from 'react';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';
import Layout from '../Components/Layout';
import {useState} from "react";
import {Category} from "./Money/categoryConfig";


function Money() {
    const [selected, setSelected] = useState({
        tag: '',
        note: '',
        category: '-' as Category,
        amount: '0'
    })

    // const convertRMBToCent = (amount: string) => {
    //     const dotPosition = amount.indexOf('.')
    //     if (dotPosition >= 0) {
    //         // 有小数点
    //         const len = amount.length
    //         let amountWithoutDot = amount.slice(0, dotPosition) + amount.slice(dotPosition + 1)
    //         amount = len - dotPosition === 3 ? amountWithoutDot : amountWithoutDot + '0'
    //         return amount
    //     } else {
    //         // 没有小数点
    //         return amount + '00'
    //     }
    // }


    return (
        <Layout>
            {selected.tag}
            <hr/>
            {selected.note}
            <hr/>
            {selected.category}
            <hr/>
            {selected.amount}
            <hr/>
            <TagsSection value={selected.tag}
                         onChange={(tag) => setSelected({
                             ...selected,
                             tag: tag
                         })}/>
            <NoteSection value={selected.note}
                         onChange={(note) => setSelected({
                             ...selected,
                             note: note
                         })}
            />
            <CategorySection value={selected.category}
                             onChange={(category: Category) => setSelected({
                                 ...selected,
                                 category: category
                             })}
            />
            <NumberPadSection value={selected.amount}
                              onChange={(amount: string) => setSelected({
                                  ...selected,
                                  amount: amount
                              })}
            />
        </Layout>

    )
}


export default Money
