import * as React from 'react';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';
import Layout from '../Components/Layout';

// type Category = '-' | '+'

function Money(){
  // const [selected, setSelected] = useState({
  //   tags:[] as string[],
  //   note:'',
  //   category: '-' as Category,
  //   amount: 0
  // })

    return (
    <Layout>
        <h1>xxx</h1>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </Layout>

  )
}


export default Money
