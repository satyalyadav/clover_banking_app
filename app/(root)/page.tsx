import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
const loggedIn = { 
  firstName: 'Satyal', lastName: 'Yadav', email: 'borgir@abc.com' };

  return (
    <section className="home">
      <div className="home-content">
      <header className="home-header">
        <HeaderBox
          type="greeting"
          title="Hello"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Manage all your accounts and transactions at one place."
        />

        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={3243.55}
        />
      </header>

      RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 153.23 }, { currentBalance: 343.2 }]}
      />
    </section>
  )
}

export default Home