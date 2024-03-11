const DepartmentTable = ({ departments }) => {
    return (
        <div className="mt-[32px] ml-[53px] w-[700px] h-[305]">
            <div className="flex justify-between">
                <h2 className="text-[22px] font-semibold text-[#191B1C] mb-6">Department</h2>
                <button className="w-[100px] h-[35px] font-Lato text-[12px] border-2 border-[#E0E0E0] cursor-pointer">Bar Chart  ˅</button>
            </div>
            <table className="min-w-full h-[350]">
                <thead className="bg-[#BDBDBD] text-[16px] gap-1">
                    <tr className="gap-1">
                        <th className="px-4 py-2 border">Department</th>
                        <th className="px-4 py-2 border">Completion %</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((dept) => (
                        <tr className="gap-1" key={dept.name}>
                            <td className="px-4 py-2 text-[#6A6666] text-[14px] border">{dept.name}</td>
                            <td className="px-4 py-2 text-[#6A6666] text-[14px] border">{dept.completionPercentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DepartmentTable;  