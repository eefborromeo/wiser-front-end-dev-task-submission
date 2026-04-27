import type { Job } from '@/data/mockJobs';
import styles from './JobRow.module.scss';
import Link from 'next/link';

type Props = {
	job: Job;
};

export function JobRow({ job }: Props) {
	return (
		<article className={styles.row}>
			<div>
				<h3 className={styles.title}>{job.title}</h3>
				<span className={styles.team}> {job.team}</span>
			</div>
			<div className={styles.brand}>{job.brand}</div>
			<p className={styles.location}>{job.location}</p>
			<Link href={job.link}>View job</Link>
		</article>
	);
}
