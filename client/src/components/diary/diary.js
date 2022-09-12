import './diary.css'

export default function Diary(){
    return (
        <div className="Diary-container">
            <div className="Diary-Wrapper">
                <div className="Food-entries">
                    <div className="Food-entries-top">
                        <div className="Add-food">
                            <img className='add-food-img' src="/assets/addfood.png" alt="add food item"/>
                            <span className='add-food-tag'>Add Food</span>
                        </div>
                    </div>
                    <div className="Food-entries-bottom">
                        <div className='food-list-entry'>
                            <div className="food-list-entry-left">
                                <img className='food-entry-badge' src='/assets/addfood.png' alt='food entry'/>
                                <span className="fooditem">Egg</span>
                            </div>
                            <div className='food-list-entry-right'>
                                <span className='calories'>100Kcal</span>
                            </div>
                        </div>
                        <div className="food-list-units">
                            <span>4 medium</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}