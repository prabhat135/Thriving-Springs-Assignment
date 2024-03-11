// src/components/Dashboard.js
import Header from './Header';
import Card from './Card';
import DepartmentTable from './DepartmentTable';
import DepartmentBarChart from './DepartmentBarChart';


const departmentDetails = [
    { name: "Department A", completionPercentage: 50, color: 'rgba(54, 162, 235, 0.2)' },
    { name: "Department B", completionPercentage: 57, color: 'rgba(255, 206, 82, 0.2)' },
    { name: "Department C", completionPercentage: 83, color: 'rgba(255, 99, 132, 0.5)' },
    { name: "Department D", completionPercentage: 78, color: 'rgba(255, 99, 132, 0.5)' },
    { name: "Department E", completionPercentage: 92, color: 'rgba(255, 99, 132, 0.5)' },
];


const data = {
    labels: ['SALES', 'MARKETING', 'DESIGN', 'HR', 'LEGAL', 'IT', 'OPS'],
    datasets: [{
        label: 'Completion %',
        data: [8, 20, 28, 7, 19, 28, 26],
        backgroundColor: [
            '#FF9500',
            '#0E5FD9',
            '#198155',
            '#E84646',
            '#0E5FD9',
            '#FF9500',
            '#198155'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(201, 203, 207, 1)'  // Border color for each bar
        ],
        borderWidth: 1,
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.20,
        categoryPercentage: 0.5,
    },{
        label: 'Completion %',
        data: [60, 60, 60, 60, 60, 60, 60],
        backgroundColor: [
            '#E5E5EF',
        ],
        
        borderWidth: 1,
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.20,
        categoryPercentage: 0.5,
    }],
};

const Dashboard = () => {
    return (
        <div>
            <Header />

            <div className="container mx-[28px] py-[60px]">
                <h1 className="text-3xl font-semibold text-black">Corporate Conflict of Interest</h1>
            </div>

            <div className='flex text-[14px] font-semibold mx-[50px] gap-[44px]'>
                <h6 className='text-blue-800'>Report</h6>
                <h6 className='text-slate-400'>User Progress</h6>
            </div>

            <div className='h-4 w-auto mx-[28px] border-b-2 border-[#EAEAEA]'></div>

            <div className="flex flex-wrap justify-stretch mx-[28px] mt-4 gap-6">
                <div className='flex items-center bg-[#F8FAFC] rounded-md'>
                    <Card imgSrc="/images/1.png" number="1.1K" text="Total Enrollments" />
                    <div className='h-32 border-r-2 border-[#E5E7E8] rounded-lg'></div>
                    <Card imgSrc="/images/2.png" number="15" text="Yet to Start" />
                    <div className='h-32 border-r-2 border-[#E5E7E8] rounded-lg'></div>
                    <Card imgSrc="/images/3.png" number="50" text="In-Progress" />
                    <div className='h-32 border-r-2 border-[#E5E7E8] rounded-lg'></div>
                    <Card imgSrc="/images/4.png" number="108" text="Completed" />
                </div>
                <div className='flex items-center bg-[#F8FAFC] rounded-md'>
                    <Card imgSrc="/images/5.png" number="75%" text="Average Progress" />
                    <div className='h-32 border-r-2 border-[#E5E7E8] rounded-lg'></div>
                    <Card imgSrc="/images/6.png" number="42 Min" text="Average Spend Time" />
                </div>
            </div>

            <div className='h-[400px] border-2 border-[#E0E0E0] mx-[28px] mt-6 rounded-xl flex justify-between'>
                <DepartmentTable departments={departmentDetails} />
                <DepartmentBarChart data={data} />
            </div>

        </div>
    );
};

export default Dashboard;
