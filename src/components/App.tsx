
import css from'../styles/App.module.css'
import CafeInfo from './CafeInfo'
import VoteOptions from './VoteOptions'
import VoteStatus from './VoteStatus'
import type { VoteType,  Votes } from '../types/votes'
import { useState } from 'react'



function App() {
   const  [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
   });
  
function handleVote(type:VoteType): void {
   setVotes(prev => ({
      ...prev,
     [type]: prev[type] + 1, 
      
   })
   );
  
  }

  function resetVotes(): void {
    setVotes({
    good: 0,
    neutral: 0,
    bad: 0,
    })
  }
 const totalVotes = votes.good + votes.neutral + votes.bad
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0
  return (
      <div className={css.app}>
        <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes>0} />
      <VoteStatus votes={ votes } totalVotes={totalVotes} positiveRate={ positiveRate} />
      </div>
  )
}

export default App
