import DashboardComponent from '@/components/admin/Dashboard';
import WithSuspense from '@/components/WithSuspense';

export default function DashboardPage() {
  return (
    <WithSuspense children={<DashboardComponent />} />
  );
}